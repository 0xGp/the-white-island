/**
 * Single source of truth for external links and the contract address.
 * Leave values as null until they are VERIFIED from official channels.
 * Never invent a contract address, supply, market cap, partners or roadmap.
 */
export const siteConfig = {
  name: "The White Island",
  ticker: "ELYSIUM",
  /** Verified contract address, or null. The copy button stays disabled while null. */
  contractAddress: null as string | null,
  /** Official X profile URL, or null -> renders "[X LINK]" placeholder. */
  xUrl: null as string | null,
  /** Telegram URL, only if supplied. */
  telegramUrl: null as string | null,
  /** Trading link, only once live. */
  tradingUrl: null as string | null,
};
