class PageController {

  
    /**
   * This function render the home page for the search airport function
   * @method airportsection
   * @param {String} req - url link:/ string
   * @param {String} res -  string
   * @return {Object} return render index.ejs page  in posts default directory views
   */
  static homePage(req , res) {
    res.render("index")
    }
}

module.exports = PageController;