const mock = {
  'login': 'xwartz',
  'id': 4149827,
  'avatar_url': 'https://avatars.githubusercontent.com/u/4149827?v=3',
  'gravatar_id': '',
  'url': 'https://api.github.com/users/xwartz',
  'html_url': 'https://github.com/xwartz',
  'followers_url': 'https://api.github.com/users/xwartz/followers',
  'following_url': 'https://api.github.com/users/xwartz/following{/other_user}',
  'gists_url': 'https://api.github.com/users/xwartz/gists{/gist_id}',
  'starred_url': 'https://api.github.com/users/xwartz/starred{/owner}{/repo}',
  'subscriptions_url': 'https://api.github.com/users/xwartz/subscriptions',
  'organizations_url': 'https://api.github.com/users/xwartz/orgs',
  'repos_url': 'https://api.github.com/users/xwartz/repos',
  'events_url': 'https://api.github.com/users/xwartz/events{/privacy}',
  'received_events_url': 'https://api.github.com/users/xwartz/received_events',
  'type': 'User',
  'site_admin': false,
  'name': 'xwartz',
  'company': null,
  'blog': 'https://xwartz.github.com',
  'location': 'HangZhou, China',
  'email': 'stddup@gmail.com',
  'hireable': true,
  'bio': 'undefined',
  'public_repos': 53,
  'public_gists': 9,
  'followers': 44,
  'following': 22,
  'created_at': '2013-04-14T03:18:16Z',
  'updated_at': '2016-08-25T07:25:01Z'
}

module.exports = router => {
  router.get('/api/users/:id', function *(next) {
    this.body = mock
    yield next
  })
}
