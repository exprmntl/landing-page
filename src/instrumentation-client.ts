import posthog from "posthog-js";

const posthogToken =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ?? process.env.NEXT_PUBLIC_POSTHOG_TOKEN;

if (posthogToken) {
  posthog.init(posthogToken, {
    api_host: "https://relay.experimental.software",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
  });
}
