import React from 'react';

const styles = {
  footer: {
    backgroundColor: "#ffffff",
    position: "absolute",
    left: "-70px",
    top: "900px",
    width: 1500,
    color: "#c6a52f"
  }
}

function Footer() {
  return (
  <footer className="page-footer font-small blue pt-4" style={styles.footer}>
    <div className="footer-copyright text-center py-3">Copyright © | 2019
    </div>
  </footer>
  )
}

export default Footer;