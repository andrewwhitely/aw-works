/* Tiny inline Markdown -> HTML formatter for plain-text snippets (post
   excerpts, etc). Block-level rendering is handled by the MDX pipeline —
   see lib/blog.ts. Inline: `code`, [links](url), ![images](url), **bold**,
   *italic*, __dotline__, ++underline++. */

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/"/g, '&quot;')
}

function safeUrl(url: string): string {
  const u = String(url).trim()
  if (/^(javascript|data|vbscript):/i.test(u)) return '#'
  return u
}

export function renderInline(text: string | undefined | null): string {
  if (!text) return ''
  let html = ''
  let i = 0
  const s = String(text)
  const len = s.length

  function starts(str: string, pos: number): boolean {
    return s.substr(pos, str.length) === str
  }

  while (i < len) {
    if (s.charAt(i) === '\\' && i + 1 < len) {
      html += escapeHtml(s.charAt(i + 1))
      i += 2
      continue
    }

    if (s.charAt(i) === '`') {
      const codeEnd = s.indexOf('`', i + 1)
      if (codeEnd !== -1) {
        html += '<code>' + escapeHtml(s.slice(i + 1, codeEnd)) + '</code>'
        i = codeEnd + 1
        continue
      }
    }

    if (s.charAt(i) === '!' && s.charAt(i + 1) === '[') {
      const altClose = s.indexOf('](', i + 2)
      if (altClose !== -1) {
        const imgUrlEnd = s.indexOf(')', altClose + 2)
        if (imgUrlEnd !== -1) {
          html +=
            '<img src="' +
            escapeAttr(safeUrl(s.slice(altClose + 2, imgUrlEnd))) +
            '" alt="' +
            escapeAttr(s.slice(i + 2, altClose)) +
            '">'
          i = imgUrlEnd + 1
          continue
        }
      }
    }

    if (s.charAt(i) === '[') {
      const labelClose = s.indexOf('](', i + 1)
      if (labelClose !== -1) {
        const urlEnd = s.indexOf(')', labelClose + 2)
        if (urlEnd !== -1) {
          html +=
            '<a href="' +
            escapeAttr(safeUrl(s.slice(labelClose + 2, urlEnd))) +
            '" target="_blank" rel="noopener noreferrer">' +
            renderInline(s.slice(i + 1, labelClose)) +
            '</a>'
          i = urlEnd + 1
          continue
        }
      }
    }

    if (starts('**', i)) {
      const boldEnd = s.indexOf('**', i + 2)
      if (boldEnd !== -1) {
        html += '<strong>' + renderInline(s.slice(i + 2, boldEnd)) + '</strong>'
        i = boldEnd + 2
        continue
      }
    }

    if (s.charAt(i) === '*') {
      const emEnd = s.indexOf('*', i + 1)
      if (emEnd !== -1) {
        html += '<em>' + renderInline(s.slice(i + 1, emEnd)) + '</em>'
        i = emEnd + 1
        continue
      }
    }

    if (starts('__', i)) {
      const dotEnd = s.indexOf('__', i + 2)
      if (dotEnd !== -1) {
        html += '<span class="dotline">' + renderInline(s.slice(i + 2, dotEnd)) + '</span>'
        i = dotEnd + 2
        continue
      }
    }

    if (starts('++', i)) {
      const underEnd = s.indexOf('++', i + 2)
      if (underEnd !== -1) {
        html += '<span class="underline">' + renderInline(s.slice(i + 2, underEnd)) + '</span>'
        i = underEnd + 2
        continue
      }
    }

    html += escapeHtml(s.charAt(i))
    i++
  }
  return html
}
