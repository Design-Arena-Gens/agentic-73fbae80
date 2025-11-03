export async function POST() {
  // Simulate analysis of 5 niche subreddits
  const subreddits = ['BuyItForLife', 'mildlyinfuriating', 'assholedesign', 'Wellthatsucks', 'CrappyDesign'];

  // Simulated analysis results with realistic consumer frustrations
  const trends = [
    {
      title: 'Planned Obsolescence in Consumer Electronics',
      severity: 9,
      frequency: 78,
      description: 'Users are increasingly frustrated with devices that fail shortly after warranty expiration. Common complaints include non-replaceable batteries, proprietary parts, and software updates that slow down older devices.',
      examples: [
        'Phone battery died exactly 13 months after purchase, costs more to replace than buying new',
        'Printer firmware update blocks third-party ink cartridges',
        'Laptop designed so RAM and storage cannot be upgraded'
      ]
    },
    {
      title: 'Dark Patterns in Subscription Cancellation',
      severity: 8,
      frequency: 65,
      description: 'Consumers report significant friction when attempting to cancel subscriptions. Companies make it easy to subscribe online but force customers to call or navigate complex multi-step processes to cancel.',
      examples: [
        'Can subscribe in 2 clicks but have to call and wait 45 minutes to cancel',
        'Cancel button hidden behind 5 pages of "special offers"',
        'Required to mail a physical letter to cancel gym membership'
      ]
    },
    {
      title: 'Shrinkflation Without Price Reduction',
      severity: 8,
      frequency: 61,
      description: 'Products are getting smaller or lower quality while maintaining or increasing prices. Consumers feel deceived when they notice reduced package sizes, fewer items per package, or cheaper materials.',
      examples: [
        'Cereal box same size but contains 20% less product',
        'Chip bags 70% air, actual chips decreased from 10oz to 7.5oz',
        'Chocolate bars noticeably thinner but price increased'
      ]
    },
    {
      title: 'Mandatory App Requirements for Basic Functions',
      severity: 7,
      frequency: 54,
      description: 'Products that previously worked standalone now require smartphone apps and accounts to function. Users complain about privacy concerns, forced data collection, and products becoming unusable when apps are discontinued.',
      examples: [
        'Smart lightbulb requires account creation and constant internet connection',
        'Car features locked behind subscription paywall via app',
        'Coffee maker stops working when company shuts down app servers'
      ]
    },
    {
      title: 'Deceptive Pricing and Hidden Fees',
      severity: 7,
      frequency: 49,
      description: 'Advertised prices do not reflect final costs. Customers encounter unexpected fees, mandatory add-ons, and pricing structures designed to obscure the true cost until checkout.',
      examples: [
        'Concert tickets $50 advertised, $87 after "convenience fees"',
        'Hotel room price doubles with mandatory "resort fees" added at checkout',
        'Furniture listed price excludes $200 "delivery and assembly fee"'
      ]
    }
  ];

  const summary = `Analysis of ${subreddits.length} niche subreddits reveals growing consumer frustration with corporate practices that prioritize short-term profits over customer satisfaction. The top trend—planned obsolescence—affects nearly 80% of electronics discussions. Dark patterns in UX design and deceptive pricing tactics are becoming normalized, eroding consumer trust. There's a clear desire for right-to-repair legislation, transparent pricing, and products built to last.`;

  return Response.json({
    subreddits,
    trends,
    summary,
    analyzedAt: new Date().toISOString(),
  });
}
