# @papercups-io/docusaurus-plugin

[![NPM](https://img.shields.io/npm/v/@papercups-io/docusaurus-plugin.svg)](https://www.npmjs.com/package/@papercups-io/docusaurus-plugin)

This plugins enable usage of the Papercups chat widget on Docusaurus powered websites.

## Install

```
npm install --save @papercups-io/docusaurus
```

## Usage

1. Sign up at https://app.papercups.io/register to get your account token. Your account token is what you will use to pass in as the accountId prop below.

2. Configure the plugin in `docusaurus.config.js`:

```
// docusaurus.config.js
module.exports = {
  plugins: [
    [
      "@papercups-io/docusaurus-plugin",
      {
        /* REQUIRED */
        // Pass in your Papercups account token here after signing up
        accountId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',

        /* OPTIONAL */
        title: 'Welcome to Papercups!',
        subtitle: 'Ask us anything in the chat window below 😊',
        newMessagePlaceholder: 'Start typing...',
        primaryColor: '#13c2c2',

        // Initial message that new users will see.
        greeting: 'Hi there! How can I help you?',

        // Used only when self-hosting Papercups. Otherwise leave it empty.
        baseUrl: 'https://app.papercups.io',

        // Add this if you want to require the customer to enter
        // their email before being able to send you a message
        requireEmailUpfront: true,

        // Add this if you want to indicate when you/your agents
        // are online or offline to your customers
        showAgentAvailability: true,
      },
    ],
  ],
};
```

See our [demo](http://app.papercups.io/demo) or our [main repo](https://github.com/papercups-io/papercups)
