import LegalPage from '../components/LegalPage'
import legalData from '../content/legal.json'

const data = legalData['stash-privacy']

export default function StashPrivacy() {
  return (
    <LegalPage
      app={data.app}
      title={data.title}
      sub={`${data.app} — Effective ${data.effectiveDate}`}
      backHref={data.backHref}
      backLabel={data.backLabel}
      description={data.description}
      url="https://aw.works/works/stash/privacy"
      sections={data.sections}
    />
  )
}
