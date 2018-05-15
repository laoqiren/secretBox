<html>
  <head>
    <title>Secret Box</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for topic in topics %}
        <li class="item">
          <a href="{{ topic.url }}">{{ topic.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>