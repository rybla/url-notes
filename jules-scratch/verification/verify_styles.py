from playwright.sync_api import Page, expect

def test_new_styles(page: Page):
    # 1. Arrange: Go to the home page.
    page.goto("http://localhost:3000")

    # 2. Assert: Check for the new styles on the home page.
    expect(page.locator("body")).to_have_css("background-color", "rgb(26, 26, 26)")
    expect(page.locator(".title")).to_have_css("font-family", '"STIX Two Math", serif')

    # 3. Screenshot: Capture the home page.
    page.screenshot(path="jules-scratch/verification/home-page.png")

    # 4. Act: Navigate to the "all" page.
    page.get_by_role("link", name="all").click()

    # 5. Assert: Check for the new styles on the "all" page.
    expect(page.locator(".previews")).to_be_visible()
    expect(page.locator(".toolbar")).to_be_visible()

    # 6. Screenshot: Capture the "all" page.
    page.screenshot(path="jules-scratch/verification/all-page.png")

    # 7. Act: Navigate to the "tags" page.
    page.goto("http://localhost:3000/tags")

    # 8. Assert: Check for the new styles on the "tags" page.
    expect(page.locator(".tags")).to_be_visible()

    # 9. Screenshot: Capture the "tags" page.
    page.screenshot(path="jules-scratch/verification/tags-page.png")
