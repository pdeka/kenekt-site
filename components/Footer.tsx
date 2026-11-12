export default function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="site-footer-brand">
        <img className="site-footer-mark" src="/assets/logo/kenekt-mark.svg" alt="Kenekt" width={36} height={36} />
        <div className="site-footer-social">
          <a href="https://www.facebook.com/KenektApp/" target="_blank" rel="noopener" aria-label="Facebook">
          <lord-icon
              src="https://cdn.lordicon.com/jxcoxfau.json"
              trigger="none"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
          ></lord-icon>
          </a>
          <a href="https://www.instagram.com/kenekt.app/" target="_blank" rel="noopener" aria-label="Instagram">
          <lord-icon
              src="https://cdn.lordicon.com/lljlideu.json"
              trigger="none"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
          ></lord-icon>
          </a>
          <a href="https://www.linkedin.com/company/kenektgroup/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <lord-icon
              src="https://cdn.lordicon.com/rqdhcgcm.json"
              trigger="none"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
          ></lord-icon>
          </a>
          <a href="https://help.kenekt.app" target="_blank" rel="noopener" aria-label="Help centre">
          <lord-icon
              src="https://cdn.lordicon.com/wczruhnt.json"
              trigger="none"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
          ></lord-icon>
          </a>
        </div>
        <a className="pill pill-dark site-footer-phone" href="tel:1300536358">1 300 KENEKT</a>
      </div>

      <nav className="site-footer-col" aria-label="Product">
        <span>Product</span>
        <a href="https://portal.kenekt.com.au" target="_blank" rel="noopener">Portal</a>
        <a href="https://app.kenekt.com.au" target="_blank" rel="noopener">Stock Management</a>
      </nav>

      <nav className="site-footer-col" aria-label="Legal">
        <span>Legal</span>
        <a href="https://portal.kenekt.com.au/docs/kenekt_referral_agreement_03_2025.pdf" target="_blank" rel="noopener">Marketing Terms</a>
        <a href="https://portal.kenekt.com.au/policies/privacy" target="_blank" rel="noopener">Privacy</a>
        <a href="https://portal.kenekt.com.au/policies/terms" target="_blank" rel="noopener">Terms of Use</a>
      </nav>
    </footer>
  )
}
