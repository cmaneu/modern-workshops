
module.exports = {
    title: 'Modern workshops',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Lectures', link: '/lectures/'},
            { text: 'Workshops', link: '/workshops/'},
        ],
        sidebar: [
            ['/', 'Welcome'],
            {
                title: 'Modern lectures',   // required
                path: '/lectures/',      // optional, which should be a absolute path.
                collapsable: true, // optional, defaults to true
                sidebarDepth: 3,    // optional, defaults to 1
                children: [
                  '/lectures/vs-code-lecture-companion'
                ]
            },
            {
                title: 'Modern Workshops',   // required
                path: '/workshops/',      // optional, which should be a absolute path.
                collapsable: true, // optional, defaults to true
                sidebarDepth: 3,    // optional, defaults to 1
                children: [
                  '/workshops/workshop-content-markdown'
                ]
            },
        ],
        // editLinks: true,
        sidebarDepth: 2,
        // docsDir: '/docs',
    }
}