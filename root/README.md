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
The karma unit and e2e tests use PhantomJS by default

```
sudo apt-get install phantomjs
```

Once your preferred test browser is installed, run:

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
