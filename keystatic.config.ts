import { config, collection, fields } from '@keystatic/core'

// Under `npm run dev` the editor at /keystatic writes straight into content/ and public/.
// On the live site it uses Keystatic Cloud, which commits edits to GitHub and so triggers a Netlify rebuild.
// The Cloud project ("team/project") is set in Netlify as NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT.
export default config({
  storage: process.env.NODE_ENV === 'development' ? { kind: 'local' } : { kind: 'cloud' },
  cloud: { project: process.env.NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT ?? '' },
  ui: {
    brand: { name: 'Kenekt' },
  },
  collections: {
    posts: collection({
      label: 'Insights',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Published', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
        summary: fields.text({
          label: 'Summary',
          description: 'Shown on the Insights list and in search and link previews.',
          multiline: true,
        }),
        author: fields.text({ label: 'Author' }),
        image: fields.image({
          label: 'Cover image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        imageAlt: fields.text({ label: 'Cover image description', description: 'For screen readers and search engines.' }),
        button: fields.object(
          {
            label: fields.text({ label: 'Label' }),
            link: fields.url({ label: 'Link' }),
          },
          { label: 'Button after the article', description: 'Optional. Leave both empty for no button.' },
        ),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Drafts show when running the site locally but are left out of the live site.',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Article',
          options: {
            image: {
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            },
          },
        }),
      },
    }),
  },
})
