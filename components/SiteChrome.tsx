"use client";

import { TemplateScripts } from "@/components/TemplateScripts";

export function SiteChrome() {
  return (
    <>
      <TemplateScripts />
      <span className="ak-scrollup">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <div className="ak-video-popup">
        <div className="ak-video-popup-overlay"></div>
        <div className="ak-video-popup-content">
          <div className="ak-video-popup-layer"></div>
          <div className="ak-video-popup-container">
            <div className="ak-video-popup-align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="about:blank" title="Video"></iframe>
              </div>
            </div>
            <div className="ak-video-popup-close"></div>
          </div>
        </div>
      </div>
    </>
  );
}
