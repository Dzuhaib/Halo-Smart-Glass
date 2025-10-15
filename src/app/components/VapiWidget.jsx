"use client";

import { useEffect } from "react";

export default function VapiWidget() {
  useEffect(() => {
    if (!window.customElements.get("vapi-widget")) {
      console.warn("Vapi widget script not yet loaded.");
    }
  }, []);

  return (
    <div>
      <vapi-widget
        public-key="8b1ebfd2-9ffa-4696-a930-aace5ca0357c"
        assistant-id="db8194c1-bd62-420c-b3d1-e2c8cc64ca48"
        mode="chat"
        theme="dark"
        base-bg-color="#000000"
        accent-color="#14B8A6"
        cta-button-color="#000000"
        cta-button-text-color="#ffffff"
        border-radius="large"
        size="compact"
        position="bottom-right"
        title="TALK WITH HALO"
        start-button-text="Start"
        end-button-text="End Call"
        chat-first-message="Hey, How can I help you today?"
        chat-placeholder="Type your message..."
        voice-show-transcript="true"
        consent-required="true"
        consent-title="Terms and conditions"
        consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
        consent-storage-key="vapi_widget_consent"
      ></vapi-widget>
    </div>
  );
}
