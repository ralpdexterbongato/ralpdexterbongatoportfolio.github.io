webpackJsonp([0],{"2DCm":function(M,L,N){"use strict";L.a={}},BpeN:function(M,L,N){"use strict";var s=function(){var M=this,L=M.$createElement,N=M._self._c||L;return N("div",{attrs:{id:"app"}},[N("header",[N("div",{staticClass:"header-container"},[M._m(0),M._v(" "),N("div",{staticClass:"navs-container",class:1==M.BurgerIsActive?"active":""},[N("router-link",{attrs:{to:"/"}},[M._v("Home")]),M._v(" "),N("router-link",{attrs:{to:"/about"}},[M._v("About")]),M._v(" "),N("router-link",{attrs:{to:"/skills"}},[M._v("Skills")]),M._v(" "),N("router-link",{attrs:{to:"/projects"}},[M._v("Projects")]),M._v(" "),N("router-link",{attrs:{to:"/contact"}},[M._v("Contact")])],1),M._v(" "),N("div",{staticClass:"burger-btn",on:{click:function(L){M.BurgerIsActive=!M.BurgerIsActive,M.Loaded=!0}}},[N("div",{staticClass:"burger-line1",class:[1==M.BurgerIsActive?"active":""]}),M._v(" "),N("div",{staticClass:"burger-line2",class:[1==M.BurgerIsActive?"active":""]}),M._v(" "),N("div",{staticClass:"burger-line3",class:[1==M.BurgerIsActive?"active":""]})])]),M._v(" "),1==M.Loaded?N("div",{staticClass:"mobile-nav",class:[1==M.BurgerIsActive?"active animated bounceInUp":"inactive animated bounceOutDown"],on:{click:function(L){M.BurgerIsActive=!M.BurgerIsActive}}},[N("div",{staticClass:"mobile-navs-container",class:1==M.BurgerIsActive?"active":""},[N("router-link",{attrs:{to:"/"}},[N("i",{staticClass:"fa fa-home"}),M._v(" Home")]),M._v(" "),N("router-link",{attrs:{to:"/about"}},[N("i",{staticClass:"fa fa-info-circle"}),M._v(" About")]),M._v(" "),N("router-link",{attrs:{to:"/skills"}},[N("i",{staticClass:"fa fa-css3"}),M._v(" Skills")]),M._v(" "),N("router-link",{attrs:{to:"/projects"}},[N("i",{staticClass:"fa fa-desktop"}),M._v(" Projects")]),M._v(" "),N("router-link",{attrs:{to:"/contact"}},[N("i",{staticClass:"fa fa-phone"}),M._v(" Contact")])],1)]):M._e()]),M._v(" "),N("div",{staticClass:"content-container"},[N("router-view")],1)])},j=[function(){var M=this,L=M.$createElement,N=M._self._c||L;return N("div",{staticClass:"mylogo"},[N("h1",[M._v("RALP DEXTER BONGATO")])])}],t={render:s,staticRenderFns:j};L.a=t},Dp8O:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzNjIgNTM0LjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2MiA1MzQuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0YwRDFCNDtzdHJva2U6I0YwRDFCNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOiMyNDNDNEE7c3Ryb2tlOiMyNDNDNEE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDojMkUzMTM3O3N0cm9rZTojMkUzMTM3O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qze2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzJFMzEzNztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0NHtmaWxsOiMyRTMxMzc7c3Ryb2tlOiMyRTMxMzc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q1e2ZpbGw6bm9uZTtzdHJva2U6I0NGQkNBNztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0NntmaWxsOiNFMEEwODU7c3Ryb2tlOiNGMUFCOTE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDd7ZmlsbDojOTk3NTY0O3N0cm9rZTojOTk3NTY0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q4e2ZpbGw6I0M5QTU4NTt9DQoJLnN0OXtmaWxsOiNDRkJDQTc7c3Ryb2tlOiNDRkJDQTc7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDEwe2ZpbGw6IzJDMkMyQztzdHJva2U6IzJDMkMyQztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MTF7ZmlsbDojMjEzMjNEO3N0cm9rZTojMjEzMjNEO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTM5LjgsMTEyLjUiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tODgsMzY4Ii8+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ0LjMsMjA0LjNsMTEuNy03LjZsMTEuMy00LjVoNS4zTDE3NCwxNzR2LTQuNWwxMS41LTExLjdsMi41LTEwLjZsMS41LTEwLjVsLTAuNy00bC00LjgtOC4zDQoJCWMwLDAtMjEuNSwwLjMtMTkuNSwzUzE1MywxNjAsMTUzLDE2MGwtMi41LTkuNWwzLTM4bC0xLTZMMTQ0LDEwNGwtNC0xMGwtMi0yMC41bC02LTcuNWwtMTEtNS41bDYtMi41bC0yOC00YzAsMC0yMS0xLjUtNDksOS41DQoJCWwtOCwyNXY1LjdWOTZsMTEuMywxLjZMNTIsOThsNi41LDcuNUg0N2MtMi45LDEtNS44LDItOC43LDNjMC4zLDMuMSwwLjcsNi4yLDEsOS4zYy0wLjEsNS43LTAuMiwxMS40LTAuMywxNy4yDQoJCWMtMS41LDMuNy0zLjQsOS44LTMuNSwxNy41Yy0wLjEsNy44LDEuNiwxMy45LDMsMTcuN2MxLjgsNS45LDMuNywxMS45LDUuNSwxNy44bDguOCwxNy44bDkuMSwxMmw0LjQsMmw1LjYsMWwzLjYsMS45bDI0LTcuMw0KCQlsMjMuMi0xMy43bDI1LjMtMjIuOUwxNDQuMywyMDQuM3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjUsNThsNi41LTE0bC05LDQuNWwxNi0xNS41aC04bDgtNkwzNiwyMWg4bC04LjUtMy41bDIxLTVsLTcuNS01aDEzLjVWM2wyMCw2bC01LTZsMTYsNS41VjNsMTEsNGwxMi0xTDExMSwzDQoJCWwxNC41LDRWM2w4LjUsNVYwbDcsOC41VjBsMTIsMTkuNXYtMTNsNy41LDExLjVsMy41LTQuNWw0LjUsOWw0LTQuNXY5bDcsNWw3LjUsMTFsOS41LDE3LjVjMCwwLTAuNSw0NC0zLjUsNTEuNWwtMy41LDEydjEwDQoJCWwtNS41LTkuNWMwLDAtMTcuNS0xLTE5LjUsM3MtNSwxNS01LDE1TDE1MywxNjBsLTIuNS05LjVsMy0zOGwtMS02TDE0NCwxMDRsLTQtMTBsLTItMjAuNWwtNi03LjVsLTExLTUuNWw2LTIuNWwtMjgtNA0KCQljMCwwLTUtNS41LTI3LDJzLTIyLDcuNS0yMiw3LjVMNDgsNjlsLTYsMTkuNUwzOS41LDk1TDM2LDcyLjVsLTQsMTJ2LTE4TDIyLjUsNzNMMjUsNTh6Ii8+DQoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIxODUuNSwxNjAgMTc3LjUsMTY5IDE3NCwxNzQgMTc0LDE4OCAxNzkuOCwxNzguNSAxODIuNSwxNzQgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00MS41LDk4YzAsMCw4LjUtMSwxMC41LDBzNi41LDcuNSw2LjUsNy41SDQ3bC04LDNMNDEuNSw5OHoiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9Ijc1LjUsMTAzIDg4LjUsOTcuNiA5OS41LDk3LjYgOTMuNSwxMDAuMyAxMDkuNSw5Ny42IDExNSwxMDAuMyAxMjUsMTA4LjUgMTE5LDEwOC41IDEwNy41LDEwMyANCgkJOTQuNSwxMDUuNSA3NS41LDEwNiAJIi8+DQoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTg4LjUsMTIwYzAsMCw4LjUtOC41LDE0LjUtN3MxNywxMS41LDE3LDExLjVzLTgsNC41LTE5LjgsMEw4OC41LDEyMHoiLz4NCgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMzksMTIzYzMuMSwxLjEsMTMuMiw0LjMsMTkuNywwLjVjMS45LTEuMSwyLjItMi4yLDIuNC0yLjdjMC44LTIuNy0xLjQtNi40LTgtOGMtMi4yLDEuMS00LjUsMi4zLTYuNywzLjQNCgkJYy0xLjQsMS0yLjksMi4yLTQuNCwzLjZDNDAuOSwxMjAuOSwzOS45LDEyMiwzOSwxMjN6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTUzLjEsMTEyLjhjLTAuMywwLjItMi42LDEuOC0zLDQuOGMtMC4zLDIuOCwxLjIsNC44LDEuNSw1LjFjMSwwLjMsMS45LDAuNiwyLjksMWMxLjEtMC4zLDIuNy0xLDQuMy0yLjMNCgkJYzEuMi0wLjksMi4yLTEuOCwyLjMtMi43QzYxLjMsMTE2LjYsNTguMywxMTMuOSw1My4xLDExMi44eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMDAuMywxMTUuOGMwLDAtMiw2LjMsMS4zLDcuM3M3LjMsMi43LDgsMS40czIuMy0yLjYsMi4zLTIuNnYtMi4xbC0xLjEtMi42bC03LjYtNEwxMDAuMywxMTUuOHoiLz4NCgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNNjMuOCwxMDUuOGMwLDAsMy41LDUuMywyLjMsMTBzLTcuNSwyOC03LjUsMjhsLTEsNC42YzAsMCwwLjgsNi41LDIsNy4zczIuNCwyLjIsMi40LDIuMiIvPg0KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0xMjAsMTk1LjNsOS44LTEwLjRjMy40LTYuMyw2LjktMTIuNiwxMC4zLTE4LjkiLz4NCgk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNTIuMywxNzcuM2MwLDAsMS44LTcuNSw2LjMtOC44czE0LjgsMCwxNC44LDBsMTAuNSw0LjFsNy4zLDQuN2wtNS41LDUuM0w2Ni4zLDE4OEw1Mi4zLDE3Ny4zeiIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iNTQuMywxNzQgNTcuNSwxNzUuOCA2NC4zLDE3NS44IDcxLjYsMTc0LjkgNzcsMTc0LjkgODUuNSwxNzUuOCA4Ny4zLDE3NC45IDkxLDE3Ny4zIDg4LjUsMTc4LjggDQoJCTgwLjUsMTc4LjggNjYuMywxNzguOCA1Ny41LDE3OC44IDUyLjgsMTc1LjQgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDgiIGQ9Ik05MS45LDI1Ni43bC0xNi40LTM0bDI0LTcuM2wyMy4yLTEzLjdsMjUuMy0yMi45bC0zLjcsMjUuNmMwLDAtNTIsNDktNTEsNTAuNw0KCQlDOTQuMywyNTYuNyw5MS45LDI1Ni43LDkxLjksMjU2Ljd6Ii8+DQoJPHBhdGggY2xhc3M9InN0OSIgZD0iTTE2NC4zLDE2MS40bC0xLjctMy41bDEuNy01LjhsMy0zLjNWMTQybDMuNy0yLjNsMywzLjd2NC4zbDMsMi45djQuOGMwLDAtNC4zLTEuNy00LjctMi43DQoJCWMtMC4zLTEtMS4zLTEuMy0yLjUtMC4zcy0xLjgsNS41LTEuOCw1LjVsNC43LDMuNWw0LjMtMS40bDQuNy0xMXYtNmwtMS45LTYuN2wtMy44LTQuNWgtN2MwLDAsMy43LTMuOCw4LTMuOHM2LTMuMyw2LjMsMA0KCQlzMS43LDUuMywyLjIsOC4zczAuOCw2LDAsOS4ycy0zLjgsMTIuMy0zLjgsMTIuM2wtNy4zLDcuMmgtM2wtNC0zLjZIMTY0LjN6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE5MS40LDIyMy41YzE1LDEyLjQsMzAsMjQuNyw0NC45LDM3LjFsMTMuMSwyMC40bDIwLjIsMzBsNCwxOS45bDIuNywxOS45bDcuMywxM2wyMSwyOGwxMS4zLDIyLjdsOCwxNy43DQoJCWwyOSw2My43YzAsMCwxLjMsOC43LTYsMTZzLTMwLDI2LTMwLDI2bC0xNS4zLDcuM0wyNDYuMyw1ODJsLTQ0LjcsMjZMMTczLDYyNS4zbC0xMy4zLTE0TDE1Nyw1OTRsLTUtMTQuN2wtOC4zLTZsLTQuNC0yMC4yDQoJCWw1LjEtMS4ybDE2LTkuM2wxMC0xLjNsOS40LTJsNy4zLThsMTAuMy0yLjhjMi41LTEuMSw0LjktMi4zLDcuNC0zLjRjMC41LTAuOCwxLjItMS43LDIuNC0yLjdjMS40LTEuMiwyLjctMS44LDMuNi0yLjENCgkJYzQtNS4yLDcuOS0xMC40LDExLjktMTUuNmMzLjMtMS45LDYuNy0zLjksMTAtNS44YzMuOS0yLjMsNy44LTQuNiwxMS44LTYuOHYtNy4zbC00LTEwLjdsLTItMTBjMCwwLTM0LTM0LTM1LjMtMzguNw0KCQlzLTEwLjUtMTQtMTAuNS0xNGwxNy44LDQ4LjdsLTQsOS42TDE5Nyw0OTJsMTgtMjUuM2w0LjcsMjMuM0wyMDUsNTE2LjdsLTI1LjMsMjBsLTE3LjQsMi43bC0yMy4xLDguN2wtNC4zLDcuM2wtNi43LDhMMTE1LDU2NA0KCQlsLTI1LjMtMC43bC0zMS4zLDcuM2wtOC43LDQuN2wtNy4zLDhsNiw1LjNsMTQsMmw2LjItMmwtMi4yLDEwTDYzLDYxNmwtMjgtMi43YzEuNy0xNi44LDMuMy0zMy42LDUtNTAuM2MxLjctMjAuMywzLjMtNDAuNyw1LTYxDQoJCWMwLjctMTIsMS4zLTI0LDItMzZjMC4zLTE1LDAuNy0zMCwxLTQ1YzQuNi0zMi44LDkuMy02NS42LDEzLjktOTguM2wxMC00NGwzLjYtMS4ybC05LjIsOTJsOS4yLTMzLjVsMjkuMi01OA0KCQljNy42LTguMywxNS4xLTE2LjcsMjIuNy0yNWMtMS40LDcuMy0yLjksMTQuNy00LjMsMjJsLTQ1LDc3LjVMNjYuMywzODRsNDEuNy01OGwyMi4xLTIwLjVsLTEuNy0xNS4zbC0xLjgtMy44bDMzLjctMTQuNmw2LTE1LjINCgkJQzE3NC42LDI0NS42LDE4MywyMzQuNiwxOTEuNCwyMjMuNXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDAsOTlsLTEsNi44YzAsMC45LDAsMS44LDAsMi44YzAsMC40LDAsMC44LDAsMS4zYzAuNS01LjcsMS0xMS41LDEuNS0xNy4yTDQyLDk2TDQwLDk5eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEwIiBkPSJNODUuOCwyNDQuMWw2LDEyLjVsNTIuNS01Mi4zYzAsMCwyMi4yLTE4LjIsMzIuMi05bDMuMyw0LjJsLTM0LjMsMTguMmwtMTUuNCwyOS44TDEwNC41LDI4Mg0KCQljMCwwLTksMTYuNS0xMCwxOC41cy0xOSwzNS41LTE5LDM1LjVsLTkuMiwzMy41di0yMGw1LjQtNDAuNWwzLjktMzEuNUw4NS44LDI0NC4xeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEwIiBkPSJNMTIzLDI3NWw0LjgtMjQuNWwxNy43LTMyLjhsMzQuMy0xOC4yaDUuOGw0LDYuNWwzLDExLjdsLTMsNy44YzAsMC0zMCwzNS41LTI4LDQzcy0zNSwxOC0zNSwxOGwzLjYsMTkNCgkJTDEwOCwzMjZsLTMyLjUsNDMuNWwtNywxMS41bDkuNS0yOC41bDMxLjUtNTUuNUwxMjMsMjc1eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEwIiBkPSJNMTEwLDM0N2MwLDAsNi43LDcuMywyMy4zLDYuM3MxNi43LTEsMTYuNy0xbDIsMTcuMmMwLDAtMzYuNy0wLjgtNDItNC41cy01LjMtMy43LTUuMy0zLjdMMTEwLDM0N3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxMCIgZD0iTTIyMywzMTljMCwwLDE3LjMtOSwyNiwwYzguNyw5LDI3LjMsMzIsMjcuMywzMmwtMi4zLTEwYzAsMC0yNS0yNy4zLTI2LTI3LjNzLTEwLjMtNS43LTE5LDANCgkJQzIyMC4zLDMxOS4zLDIyMywzMTksMjIzLDMxOXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxMSIgZD0iTTY2LjMsMzg0YzAsMC04LjEsOTEtMTAuNywxMTZjLTIuNiwyNS0zLjMsNjEtMy4zLDYxbC0yLjIsOHYzOGwyLjctMTUwTDY2LjMsMzg0eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDExIiBkPSJNMTkyLjUsNDExLjNsMTAuNSwxNGwyMS41LDI0LjVsMTMuOSwxNC4ybDIsMTBsMi4zLDZjMS43LDQuMSwzLjMsOC4zLDUsMTIuNGMtNC41LDEuNi05LjYsMy42LTE1LDYuNA0KCQljLTMuNywxLjktNywzLjktMTAsNS44Yy02LjUsNy40LTEzLDE0LjgtMTkuNCwyMi4ybC0xMC43LDIuOWMtMS44LDAuNS0zLjcsMS01LjUsMS41YzQuNy0zLjgsOS4zLTcuNywxNC0xMS41bDcuMi04LjlsMTEuNS0yMC45DQoJCWwtNC43LTIzLjNMMTk3LDQ5MmwxMy4zLTMyTDE5Mi41LDQxMS4zeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEwIiBkPSJNMTQsMjg0LjciLz4NCjwvZz4NCjxwYXRoIGNsYXNzPSJzdDExIiBkPSJNLTEwMS43LDQ2MCIvPg0KPHBhdGggY2xhc3M9InN0MTEiIGQ9Ik0tMTkzLDQxMyIvPg0KPC9zdmc+DQo="},Fs8J:function(M,L,N){"use strict";L.a={name:"Home",data:function(){return{}}}},M93x:function(M,L,N){"use strict";function s(M){N("d8f/")}var j=N("xJD8"),t=N("BpeN"),D=N("VU/8"),i=s,w=D(j.a,t.a,!1,i,null,null);L.a=w.exports},NHnr:function(M,L,N){"use strict";Object.defineProperty(L,"__esModule",{value:!0});var s=N("7+uW"),j=N("M93x"),t=N("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:t.a,template:"<App/>",components:{App:j.a}})},O36n:function(M,L,N){"use strict";var s=N("2DCm"),j=N("mNUI"),t=N("VU/8"),D=t(s.a,j.a,!1,null,null,null);L.a=D.exports},YaEn:function(M,L,N){"use strict";var s=N("7+uW"),j=N("/ocq"),t=N("lO7g"),D=N("c27y"),i=N("O36n");s.a.use(j.a),L.a=new j.a({mode:"history",routes:[{path:"/",name:"Home",component:t.a},{path:"/about",name:"About",component:D.a},{path:"/skills",name:"Skills",component:i.a}]})},Zs8U:function(M,L,N){"use strict";L.a={}},c27y:function(M,L,N){"use strict";function s(M){N("eHBU")}var j=N("Zs8U"),t=N("mgZI"),D=N("VU/8"),i=s,w=D(j.a,t.a,!1,i,null,null);L.a=w.exports},"d8f/":function(M,L){},eHBU:function(M,L){},lO7g:function(M,L,N){"use strict";var s=N("Fs8J"),j=N("pwjP"),t=N("VU/8"),D=t(s.a,j.a,!1,null,null,null);L.a=D.exports},lS0b:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0ODAgNDI2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODAgNDI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojNDQ1NENGO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOiM0NDU0Q0Y7fQ0KCS5zdDJ7ZmlsbDojRkZGNjdGO30NCgkuc3Qze2ZpbGw6I0NFNkM2ODt9DQoJLnN0NHtmaWxsOiMzRkYxRkY7fQ0KCS5zdDV7ZmlsbDojRkYyQThFO3N0cm9rZTojRkYyQThFO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0NntmaWxsOiM1NUZGRjI7fQ0KCS5zdDd7ZmlsbDojRkYyQThFO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTQ2LjUsMzYxLjUiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MTkuMSwxNWMxLjksMCwzLjUsMS42LDMuNSwzLjV2MjQ2LjdjMCwxLjktMS42LDMuNS0zLjUsMy41SDU4LjljLTEuOSwwLTMuNS0xLjYtMy41LTMuNVYxOC41DQoJCWMwLTEuOSwxLjYtMy41LDMuNS0zLjVINDE5LjEgTTQxOS4xLDE0SDU4LjljLTIuNSwwLTQuNSwyLTQuNSw0LjV2MjQ2LjdjMCwyLjUsMiw0LjUsNC41LDQuNWgzNjAuMmMyLjUsMCw0LjUtMiw0LjUtNC41VjE4LjUNCgkJQzQyMy42LDE2LDQyMS42LDE0LDQxOS4xLDE0TDQxOS4xLDE0eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQzMy4xLDR2Mjg2LjdINDQuOVY0SDQzMy4xIE00MzQuMSwzSDQzLjl2Mjg4LjdoMzkwLjFWM0w0MzQuMSwzeiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTMwNS4xLDI5NnYyMi4xSDE3MS44VjI5NkgzMDUuMSBNMzA2LjEsMjk1SDE3MC44djI0LjFoMTM1LjNWMjk1TDMwNi4xLDI5NXoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zOC40LDMzNC4xbDIwMCwwLjRsMTk5LjcsMC40bDI3LjEsNjEuNmw5LjIsMjAuOWwtMzUuNywwLjFjLTAuNCwwLTAuNywwLjItMC45LDAuNWwtMzk5LjUtMC4yDQoJCWMwLTAuMS0wLjEtMC4xLTAuMi0wLjJjLTAuMi0wLjItMC40LTAuMy0wLjctMC4zYzAsMCwwLDAsMCwwbC0xNCwwbC0xOS41LDBsMTctNDFMMzguNCwzMzQuMSBNMzguMSwzMzMuMWMtMC4zLDAtMC41LDAuMi0wLjUsMC41DQoJCWMtMTEuNywyOC4yLTIzLjQsNTYuNS0zNS4xLDg0LjdjMTEuNywwLDIzLjMsMCwzNSwwYzAsMC4zLDAuMiwwLjUsMC41LDAuNWw0MDAuMiwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41DQoJCWMxMi40LDAsMjQuOC0wLjEsMzcuMy0wLjFjLTEyLjQtMjguMi0yNC44LTU2LjQtMzcuMi04NC42QzMwNS4yLDMzMy42LDE3MS43LDMzMy40LDM4LjEsMzMzLjFMMzguMSwzMzMuMXoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNjAsMzAuM0g2OS40Yy0yLjIsMC00LDEuOC00LDR2MC44YzAsMi4yLDEuOCw0LDQsNEgxNjBjMi4yLDAsNC0xLjgsNC00di0wLjhDMTY0LDMyLjEsMTYyLjIsMzAuMywxNjAsMzAuM3oNCgkJIi8+DQo8L2c+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjc1LjIsNTNoLTIwOGMtMi4yLDAtNC0xLjgtNC00di0wLjhjMC0yLjIsMS44LTQsNC00aDIwOGMyLjIsMCw0LDEuOCw0LDRWNDlDMjc5LjIsNTEuMiwyNzcuNCw1MywyNzUuMiw1M3oiDQoJLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik05OC41LDY1LjZINzAuMWMtMi4yLDAtNC0xLjgtNC00djBjMC0yLjIsMS44LTQsNC00aDI4LjRjMi4yLDAsNCwxLjgsNCw0djBDMTAyLjUsNjMuOCwxMDAuNyw2NS42LDk4LjUsNjUuNnoiDQoJLz4NCjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0yNjQuNSw5Nkg3MC4xYy0yLjIsMC00LTEuOC00LTR2LTAuOGMwLTIuMiwxLjgtNCw0LTRoMTk0LjRjMi4yLDAsNCwxLjgsNCw0VjkyQzI2OC41LDk0LjIsMjY2LjcsOTYsMjY0LjUsOTZ6DQoJIi8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjI4LjIsMTI1LjRINjkuNGMtMi4yLDAtNC0xLjgtNC00di0wLjhjMC0yLjIsMS44LTQsNC00aDE1OC44YzIuMiwwLDQsMS44LDQsNHYwLjgNCglDMjMyLjIsMTIzLjYsMjMwLjQsMTI1LjQsMjI4LjIsMTI1LjR6Ii8+DQo8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjQwLjgsMTQxLjhIMTM2LjVjLTIuMiwwLTQtMS44LTQtNHYtMC44YzAtMi4yLDEuOC00LDQtNGgxMDQuMmMyLjIsMCw0LDEuOCw0LDR2MC44DQoJQzI0NC44LDE0MCwyNDMsMTQxLjgsMjQwLjgsMTQxLjh6Ii8+DQo8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjk2LjEsMTU2LjRINjkuMWMtMi4yLDAtNC0xLjgtNC00di0wLjhjMC0yLjIsMS44LTQsNC00aDIyNi45YzIuMiwwLDQsMS44LDQsNHYwLjgNCglDMzAwLjEsMTU0LjYsMjk4LjMsMTU2LjQsMjk2LjEsMTU2LjR6Ii8+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjU2LDE2OC45SDcxYy0yLjIsMC00LTEuOC00LTR2LTAuOGMwLTIuMiwxLjgtNCw0LTRoMTg1YzIuMiwwLDQsMS44LDQsNHYwLjhDMjYwLDE2Ny4xLDI1OC4yLDE2OC45LDI1NiwxNjguOQ0KCXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDAuNCw2Ni4zaC0zMC44Yy0yLjIsMC00LTEuOC00LTR2LTAuOGMwLTIuMiwxLjgtNCw0LTRoMzAuOGMyLjIsMCw0LDEuOCw0LDR2MC44DQoJQzE0NC40LDY0LjUsMTQyLjYsNjYuMywxNDAuNCw2Ni4zeiIvPg0KPHBhdGggY2xhc3M9InN0NyIgZD0iTTEyMS4yLDE0MS44SDY5LjRjLTIuMiwwLTQtMS44LTQtNHYtMC44YzAtMi4yLDEuOC00LDQtNGg1MS44YzIuMiwwLDQsMS44LDQsNHYwLjgNCglDMTI1LjIsMTQwLDEyMy40LDE0MS44LDEyMS4yLDE0MS44eiIvPg0KPHBhdGggY2xhc3M9InN0NiIgZD0iTTIwNC43LDE4MS42SDcxLjFjLTIuMiwwLTQtMS44LTQtNHYtMC44YzAtMi4yLDEuOC00LDQtNGgxMzMuNmMyLjIsMCw0LDEuOCw0LDR2MC44DQoJQzIwOC43LDE3OS44LDIwNi45LDE4MS42LDIwNC43LDE4MS42eiIvPg0KPHBhdGggY2xhc3M9InN0MyIgZD0iTTk4LjUsMTkzLjZINzAuMWMtMi4yLDAtNC0xLjgtNC00djBjMC0yLjIsMS44LTQsNC00aDI4LjRjMi4yLDAsNCwxLjgsNCw0djANCglDMTAyLjUsMTkxLjgsMTAwLjcsMTkzLjYsOTguNSwxOTMuNnoiLz4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yNDYuNSwxMjQuNmgtNC40Yy0yLjIsMC00LTEuOC00LTR2MGMwLTIuMiwxLjgtNCw0LTRoNC40YzIuMiwwLDQsMS44LDQsNHYwDQoJQzI1MC41LDEyMi44LDI0OC43LDEyNC42LDI0Ni41LDEyNC42eiIvPg0KPHBhdGggY2xhc3M9InN0NiIgZD0iTTEwNC43LDgxLjZINzAuNWMtMi4yLDAtNC0xLjgtNC00djBjMC0yLjIsMS44LTQsNC00aDM0LjJjMi4yLDAsNCwxLjgsNCw0djBDMTA4LjcsNzkuOCwxMDYuOSw4MS42LDEwNC43LDgxLjYNCgl6Ii8+DQo8L3N2Zz4NCg=="},mNUI:function(M,L,N){"use strict";var s=function(){var M=this,L=M.$createElement;M._self._c;return M._m(0)},j=[function(){var M=this,L=M.$createElement,N=M._self._c||L;return N("div",{staticClass:"skills-container"},[N("div",{staticClass:"skills-footer-landscape"}),M._v(" "),N("div",{staticClass:"skills-footer"},[N("h1",[M._v("FULL STACK")]),M._v(" "),N("div",{})])])}],t={render:s,staticRenderFns:j};L.a=t},mgZI:function(M,L,N){"use strict";var s=function(){var M=this,L=M.$createElement;M._self._c;return M._m(0)},j=[function(){var M=this,L=M.$createElement,s=M._self._c||L;return s("div",{staticClass:"about-page-container"},[s("div",{staticClass:"about-me-hero"},[s("div",{staticClass:"about-left"},[s("h1",[M._v(" About Page")]),M._v(" "),s("div",{staticClass:"image-container"},[s("img",{attrs:{src:N("Dp8O"),alt:"Profile"}})])]),M._v(" "),s("div",{staticClass:"about-right"},[s("p",[M._v("Hi! I am Ralp Dexter and I like coding while "),s("span",{staticClass:"hobbies"},[M._v("i play my guitar")]),M._v(" or "),s("span",{staticClass:"hobbies"},[M._v("listening to chill-music")]),M._v(". What is my dream? well... in my dream i am still writing my codes haha, Coding is already a part of my daily life; and now, my goal is to become a "),s("br"),s("span",{staticClass:"goal"},[M._v("Senior Web Developer")]),M._v(" "),s("i",{staticClass:"fa fa-code"})]),M._v(" "),s("h2",[s("i",{staticClass:"fa fa-code"}),M._v("Self Learner")])])])])}],t={render:s,staticRenderFns:j};L.a=t},pwjP:function(M,L,N){"use strict";var s=function(){var M=this,L=M.$createElement;M._self._c;return M._m(0)},j=[function(){var M=this,L=M.$createElement,s=M._self._c||L;return s("div",{staticClass:"home-container"},[s("div",{staticClass:"home-box"},[s("h1",{staticClass:"bigtext"},[M._v("Web Developer")])]),M._v(" "),s("div",{staticClass:"home-box"},[s("div",{staticClass:"big-svg"},[s("img",{attrs:{src:N("lS0b"),alt:"picture"}})])])])}],t={render:s,staticRenderFns:j};L.a=t},xJD8:function(M,L,N){"use strict";L.a={name:"app",data:function(){return{BurgerIsActive:!1,Loaded:!1}}}}},["NHnr"]);
//# sourceMappingURL=app.d43efca059a2842478ea.js.map