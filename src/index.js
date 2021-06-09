module.exports = function (_context, options) {
  const {
    accountId,
    agentAvailableText,
    agentUnavailableText,
    awayMessage,
    baseUrl = 'https://app.papercups.io',
    customer,
    customIconUrl,
    defaultIsOpen,
    emailInputPlaceholder,
    greeting,
    hideToggleButton,
    iconVariant,
    iframeUrlOverride,
    isOpenByDefault,
    newMessagePlaceholder,
    newMessagesNotificationText,
    persistOpenState,
    position,
    primaryColor = '#1890ff',
    requireEmailUpfront,
    showAgentAvailability,
    subtitle,
    title,
  } = options;

  // Removes the nullish values to condense the injected html.
  const config = Object.entries({
    accountId,
    agentAvailableText,
    agentUnavailableText,
    awayMessage,
    baseUrl,
    customer,
    customIconUrl,
    defaultIsOpen,
    emailInputPlaceholder,
    greeting,
    hideToggleButton,
    iconVariant,
    iframeUrlOverride,
    isOpenByDefault,
    newMessagePlaceholder,
    newMessagesNotificationText,
    persistOpenState,
    position,
    primaryColor,
    requireEmailUpfront,
    showAgentAvailability,
    subtitle,
    title,
  })
    .filter((_key, value) => value != null)
    .reduce((acc, [key, value]) => ({...acc, [key]: value}), {});

  if (!accountId) {
    throw new Error(`'accountId' missing in plugin options.`);
  }

  return {
    name: '@papercups-io/docusaurus',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `window.Papercups={config:${JSON.stringify(config)}};`,
          },
          // When the window's width is 996px and below, docusaurus has a sidebar button.
          // These styles moves the chat toggle button above it to prevent the two buttons from overlapping.
          {
            tagName: 'style',
            innerHTML: `
              @media (max-width: 996px) {
                .Papercups-toggleButtonContainer {
                  bottom: 80px;
                }

                .Papercups-chatWindowContainer {
                  bottom: 160px;
                }
              }
            `,
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
              async: true,
              defer: true,
              src: `${baseUrl}/widget.js`,
            },
          },
        ],
      };
    },
  };
};
