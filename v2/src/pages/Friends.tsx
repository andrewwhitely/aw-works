import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import friendsData from '../content/friends.json'


type Friend = {
	name: string;
	description: string;
	url: string;
	label?: string;
};

const friends: Friend[] = friendsData.friends

export default function Friends() {
  useDocumentMeta({
    title: 'Friends — Andrew Whitely',
    description: 'A handful of great folks to connect with — friends of Andrew Whitely.',
    url: 'https://aw.works/friends',
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/friends » $</span>
          <span className="cmd">ls</span>
          <span className="arg">-l</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0 1.5rem' }}>
          a handful of great folks to connect with.
        </p>

        <div id="blog-list">
          {friends.sort((a, b) => a.name!.localeCompare(b.name!)).map((friend, index) => (
            <article className="blog-item" key={friend.url}>
              <div className="blog-date">
				{String(index + 1).padStart(2, '0')}
			  </div>
              <div className="blog-item-main">
                <div className="blog-title talk-title">
                  <a href={friend.url} target="_blank" rel="noopener">{friend.name}</a>
                </div>
                <p className="blog-excerpt">{friend.description}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  )
}
