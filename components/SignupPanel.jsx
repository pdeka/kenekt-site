/** The Insights sign-up prompt: under the heading on /insights and at the end of each article. */
export default function SignupPanel() {
  return (
    <aside className="insights-signup" aria-label="Create a Kenekt account">
      <p>
        Help your buyers compare suburbs and understand the property market. Create your Kenekt adviser account to access all our suburb,
        regional and industry reports and share them under your own brand.
      </p>
      <a className="pill pill-blue" href="https://portal.kenekt.com.au/sign_up">
        Create your free account
        <lord-icon
          src="https://cdn.lordicon.com/cyvvyiob.json"
          trigger="hover"
          state="hover-pinch"
          colors="primary:#4be1ec,secondary:#cb5eee"
          stroke="bold"
          style={{ width: 24, height: 24 }}
        ></lord-icon>
      </a>
    </aside>
  )
}
