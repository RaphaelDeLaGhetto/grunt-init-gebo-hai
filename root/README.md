{%= name %}
===========
{%= description %}

Setup
=====
```
npm install && bower install
```

Test
====
```
grunt test
```

Run your server
===============
```
grunt server
```

License
=======
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %} {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
