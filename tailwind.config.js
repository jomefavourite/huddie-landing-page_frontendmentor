module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        violet: "#674baf",
        hovviolet: "#674bafbb",
      },
      backgroundImage: {
        mobile: "url('./images/bg-mobile.svg')",
        desktop: "url('./images/bg-desktop.svg')",
      },
      borderRadius: {
        border: "20px",
      },
      fontFamily: {
        Poppins: "Poppins",
        opensans: "Open Sans",
      },
      backgroundPosition: {
        newP: '-10px -100px',
        newPnone: '0px 0px',
      }
    },
  },
  variants: {},
  plugins: [],
};
