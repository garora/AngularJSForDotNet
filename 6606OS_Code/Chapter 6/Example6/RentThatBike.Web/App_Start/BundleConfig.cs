﻿using System.Web;
using System.Web.Optimization;

namespace RentThatBike.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/browser-support").Include(
                        "~/scripts/modernizr-{version}.js",
                        "~/scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/common-scripts").Include(
                        "~/scripts/jquery-{version}.js",
                        "~/scripts/moment.js",
                        "~/scripts/angular.js",
                        "~/scripts/angular-route.js",
                        "~/scripts/angular-resource.js",
                        "~/scripts/ui-bootstrap-{version}.js",
                        "~/scripts/spin.js",
                        "~/scripts/angular-spinner.js",
                        "~/scripts/app/app.js",
                        //"~/scripts/app/filters/*.js",
                        //"~/scripts/app/directives/*.js",
                        "~/scripts/app/services/*.js",
                        "~/scripts/app/controllers/*.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/content/bootstrap.css",
                      "~/content/app/app.css"));

            BundleTable.EnableOptimizations = true;

        }
    }
}
