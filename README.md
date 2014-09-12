grunt-init-gebo-hai
===================

grunt-init a gebo human-agent interface

This software, in conjunction with grunt-init, creates a ready-to-deploy/develop Angular gebo app preconfigured for OAuth2 authentication.

## Getting Started

### Setup grunt
if you haven't already, that is... Gebo currently depends on grunt@0.4.1. This requires a bit of prep work.

```
sudo npm install grunt-cli -g
sudo npm install grunt-init -g
```

The first command enables you to run the grunt installed locally, automatically. The second allows you to call grunt-init on this template.

### Next, install the template
This is going in your `~/.grunt-init/` directory

```
git clone https://github.com/RaphaelDeLaGhetto/grunt-init-gebo-hai.git ~/.grunt-init/gebo-hai
```

### Create a new project:

```
mkdir mynewproject
cd mynewproject
grunt-init gebo-hai
sudo npm install
bower install
```

### Run your server

```
grunt server
```

and go to <http://localhost:9000>.

## Contributing
Hit me with it.

## License
MIT license.
