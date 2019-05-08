export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-1-studio',
                  apiId: '0ff4c36e-e259-4a22-bb02-12b2aaf02b6a'
                },
                {
                  buildHookId: '5cd2efd177cb2375d2d5577d',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-1',
                  apiId: '0931987e-1101-4c5d-9c9b-72a56bf652fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-nuxt-events-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
