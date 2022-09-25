---
title: TEST 👋
description: TESTING
summary: 🎉 Let's start a brand new awesome blog...
published: '2022-09-25T12:00:00.000+08:00'
updated: '2022-09-25T12:00:00.000+08:00'
cover: ./cover.jpg
coverStyle: 'NONE'
tags:
  - test
  - giscus
---

```yaml
  giscus:
    repo:             # <gh-username>/<repo>
    repo_id:
    category:
    category_id:
    mapping:          # optional, default to 'pathname'
    input_position:   # optional, default to 'bottom'
    lang:             # optional, default to the value of `site.lang`
```

[GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer)

```
{
  repository(owner:  "repo", name: "repo") {
    id
    discussionCategories (first: 5) {
      nodes {
        name
        id
      }
    }
  }
}
```

執行後：

```json
{
  "data": {
    "repository": {
      "id": "R_kgDOG6UKFQ",
      "discussionCategories": {
        "nodes": [
          {
            "name": "Announcements",
            "id": "DIC_kwDOG6UKFc4CBXaW"
          },
          {
            "name": "General",
            "id": "DIC_kwDOG6UKFc4CBXaX"
          },
          {
            "name": "Ideas",
            "id": "DIC_kwDOG6UKFc4CBXaZ"
          },
          {
            "name": "Q&A",
            "id": "DIC_kwDOG6UKFc4CBXaY"
          },
          {
            "name": "Show and tell",
            "id": "DIC_kwDOG6UKFc4CBXaa"
          }
        ]
      }
    }
  }
}
```

將對應的ID填入`_config.yml`就大功告成了。

> 别忘了在GitHub個人設置裡面的Integrations中安裝Giscus並授權
{: .prompt-warning }
