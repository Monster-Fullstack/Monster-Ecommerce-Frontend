class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  /**
   * CompileURL() v1
   * @param methodName The Name of the method or page after the domain {BaseURL}
   * @returns Full URL Domain + your page or method or url
   */
  static CompileURL = (methodName: string) => `${AppURL.BaseURL}/${methodName}`;

  static VisitorDetails = AppURL.CompileURL("visitor");
  static ContactURL = AppURL.CompileURL("contact");
  static SiteInfo = AppURL.CompileURL("siteinfo");
  static AllCategories = AppURL.CompileURL("category");
  static AllProducts = AppURL.CompileURL("products");
  static LoginURL = AppURL.CompileURL("login");
  static RegisterURL = AppURL.CompileURL("register");
  static ForgetURL = AppURL.CompileURL("forget");
  static ResetURL = AppURL.CompileURL("reset");
}

export default AppURL;
