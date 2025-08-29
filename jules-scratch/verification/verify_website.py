import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath("index.html")

        # Navigate to the local HTML file
        page.goto(f"file://{file_path}")

        # Wait for the page to load
        page.wait_for_load_state("networkidle")

        # Scroll to the portfolio section
        portfolio_section = page.locator("#portfolio")
        portfolio_section.scroll_into_view_if_needed()

        # Take a screenshot of the full page
        screenshot_path = "jules-scratch/verification/website.png"
        page.screenshot(path=screenshot_path, full_page=True)

        browser.close()
        print(f"Screenshot saved to {screenshot_path}")

if __name__ == "__main__":
    run_verification()
