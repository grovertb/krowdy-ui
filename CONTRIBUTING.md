# Contributing to Krowdy-UI

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Krowdy-UI community. Here are a few guidelines that will help you along the way.

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/grovertb/krowdy-ui/issues?q=is:open+is:issue+label:"good+first+issue") that contain changes that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than a week, it’s fine to take it over but you should still leave a comment.

## Sending a Pull Request

Krowdy-UI is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote

```sh
git clone git@github.com:<yourname>/krowdy-ui.git
cd krowdy-ui
git remote add upstream git@github.com:grovertb/krowdy-ui.git
```

3. Synchronize your local `master` branch with the upstream one:

```sh
git checkout master
git pull upstream master
```

4. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

5. Make changes, commit and push to your fork:

```sh
git push -u
```

6. Go to [the repository](https://github.com/grovertb/krowdy-ui) and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### Testing the documentation site

The documentation site is built with Krowdy-UI and contains examples of all the components.

To get started:

```sh
yarn
yarn docs:dev
```

You can now access the documentation site [locally](http://localhost:3000).
Changes to the docs will hot reload the site.

## License

By contributing your code to the grovertb/krowdy-ui GitHub repository, you agree to license your contribution under the MIT license.