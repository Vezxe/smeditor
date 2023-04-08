export enum Icons {
  SELECT_FILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVR4nO3YQQ6CQBBE0X8PXKrn9DqGcDNNZC5QhGR2agQk6Z5QL+l9FwULGszMzN6dgB4ogFbOjQTLPzcsniZE/+fy4SHKTgHCQijZFGAALq0GUJ35u+xaDiDg3nqA15YA0bR2HwfYmdxAMLmBYHIDweQGgskNBJMbCCY3EExuIJgO18DY+k/9kGBRfZn57PnTFXgkWFYfDltnFurqESnD6zTWJ794eTMzO44JY84XrlhT/UgAAAAASUVORK5CYII=",
  REVERT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACY0lEQVR4nO2aTUhVQRiGn1pYSVqLBM0WbQpNuLcoRIhS3AVFEEWLtiEKRRAUghAXidyoRNAf7XPhwqSfRW2jRVw0cpVCBJrR36KIfggqDswFGQY7Z+65986Zbx74tud+73PnnDNnZiAQCAQCgYAFm4BuYCMC2QO8B/4CS8BWBLEb+KTCl+ocQsgbwkc1hJDwHw3hRQjIrxLeewH5/4T3WkAuRnhvBeRihvdSQC5BeO8EtAPvEoT3SkC7RXhvBHQAHyzCR/UWKFahngJTwE01++wBNqQloGgZvtb1HXgInATqyhHw2YEw5dYycMZWxJADAdKqOWCfjYRRyx+8DeytQu0Hjqp/+Q4wv0pPv4DT1ZJQoHa0qZ6/pvmGGsuQgBJb1Kj4Y+jvbKUlFHCHE8BPrb/f6pWZmCsZFIAK+0Xr8Q3QUKmRUMA9jhhuh8u2FxvLoICIa1qf34CmSkgo4Cbr1eRoZa+D5VxwPGMCIi4aJkmkLeES7tKohn6p1+i50Jy2hMO4zSOt31NpXHQAmAb6cZ/zmoAbCKNHE3APYezSBDxDGE2agAWEsV0T8AJhdGoCHiOM45qAuwjjuiZgGGG80gQcQhBdhmX0egTxQBMwiSAOGhZFehHCZrUMtjL8c2ANAqgD7mvho5FwAAE0AE8MaxbRq9B7OoBZQ/himrvILtICXDXsB5Q+fFrxjLXATrX3N602PkxrlS+BbTjMOmBEfZ/HPSQRzep+xNirmMjCQe7BGEGS1mvgGBnhVorBZ4C+ck+J1OLkue3JlEV1NOaCevpnlsaEhyR2ZOHeDgQCgUAA9/kHkepiJFq7BJgAAAAASUVORK5CYII=",
  ADD_FOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAvUlEQVRIie2UTQ7CIBBGnz8rb+Mt2hqv4TGMmt4Kexl7gUa3TXBRTAALQqGJJr5kNpR+r8ykwJ9vogJaQDrqlCrwhWeRfAoPrRYo5xRI4OYTpGLkLDMEevl9wXqGzC2wH3uQa8gGOVpUAALoVAmGW+GNKSc44v4XLqmCwgpcqfVeWzNOEisQAYJGfyHkspPARu3vrGCbHrjrQz4oSSiLiL2TuBLZoljKAMEuRQBwxj2rOjX8RcXQioeqBu3Ln4QChU8M4+FlAAAAAElFTkSuQmCC",
  CHEVRON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbklEQVRIie2PMQqAMAxFXwfP6qJVPIjYzcOKdUkhQ0BaCoLkLS3k818CjuN8ztApYzIDl7xvmalFsAIZuIFozKPMMrC0CAJwKIkuGVX5KdkmLEm3ci1JSlLKU49yLSmXVG1es0EANvnvInKcP/AA784fpjlWwNQAAAAASUVORK5CYII=",
  EDIT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABqUlEQVRIia3VO2hUQRTG8d+GEC0sRMVKU4naKAQrESEoWBiwshALtREsLQQRGytNt2CvaCPiI52NaK92NlG0kFXw1fgIanztWsy57ma5l52b3APDcGfO+X+z5357h2ZiD9oYa4i3JPZjAT1cbVrkCH4F/HfMV5oSOYW/AZ3FXg3+krMB6uL0wPqKRVrSy+xJrTlakrNPv13tOvBxXI/C75ipyDsXOT8wnQtfhTtRuCA5pyyOSW37g8O58DW4H/APmKrIOyS1pouTufB1eBTwDrZW5E1LLenhfC58Es+j6BM2V+RN4UvkXc6Fb8frKHqr2hFb8D72b8i05S58jKKH0ju4NCDSiryNeBHrDyQjjIwd+BpF85gY2Cv838ZaPI3nx3GIrJiNomJcGNovRN7F/AwbcuFwcUhgWGQCr2L9jWSE7GjhZYlA8TFr4Vo8f8bOOnDSv7MMXownMX/D7rpwuDlCoPjAHVwOfD0WR8C7OFEXPB7zceU+7uBuHOA27tUVKGJe/6Q/cQsHNHD1jUnuWJQ8fQabpItkNeb079zljiWxTfJ9Z4XQ/+MfA5yyJxzqcDgAAAAASUVORK5CYII=",
  ADD_FILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABiElEQVRoge2YMU7DMBSGvwQJVO7CwN1YYEFUMAMdYCpHYUMcgg49A3SgEggGE2GskNh5frYr+ZOsppWS93+q9WIbKpWKD4fAHFgBH8BX4NgCt0CbOjiY8M8BYYfGkgwS8wjBs0qsrOKnwH7g/dkl7DkfGh4K+CfsotL7lz3f1SViCjTAnfPbA8oSMQUgg0RsAUgsoSEACSW0BCCRhFRgrA23KHcnqYD9Ijwjg4RU4MJ5RshYSIJ3SAVmwNM/AcfGuyR4h1QAjMQ58EL4cnyQxqO4279T4F0zywYjJlUgN1VgF4jRRkM5Ag5+PgcptY16U+IUajFLiA2RzpJSTqEGuHdqipfXqQT6wkeRSCEwFF4soS3gE14koS2wcGr0bWxEewRtgTf+hm2dmu5u7TW0gLbAFaZl3vA7PdyaLaalboBL++ZSX2R1P7Az+Ah8WtdTjtdV8RFYW9cnFCgxhuRcJ3R0RO18knOdIgQ6iannOkUIpGaLCT96Mrenn2USM+AYuAYeM2epDPINL56D04/lX9sAAAAASUVORK5CYII=",
  MENU_VERTICAL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3XS04CQRSF4X+kYx8h0UWIM5vFoIxVdkCgmbMDlSWBsAchLMLWVHI76ZC2pnLgfMlNOqlJn1TdeoCZmZnZSbqNknUPrICfqCXQRcw1sG2EqGsHdBAybAlR1wtCZpkgaUzGUyZIHyFne43ebPg0JuUSeAe+ot6Ai//+KTsWPaCMKhBVAlWj0dP3GMGZqFp2rUptZqaZcyTNlIwyE2SCkOKPpfUNPCBmvBcmhRghqohlNlGcCTtUV8Ac2ER9xEVSyjmwbtm1PtWu8YPMOfKIkNmxPHVfM0GeEWv0bUuIjWLDd+ONXodYAHcIu4kyMzMzOzW/IiF2pLfCTcAAAAAASUVORK5CYII=",
  COPY = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVR4nO2YQUoDQRBFHwiDB5AsXCSexYxeIVfwCDlE1hoXuUBuodl4CDGOgSyySrIKGGgZ6EAxTBZOVzc21oPe9OJX/eqqgSkwDMPIiT4wBhbAGjgCTuFsgBnQi5X4JTABDkoJnzvvwJV28nVV3iIn7sSZa1e+mfwrMAKugQv+OBOR+DfwQGYDexAGZPI3wDOwUhxk58/R606BQYiBsRB9Eff3wD7RPOyAsquBhRAaicqnSt4JE3U3/Jq1EKkHFt82p7sP4BYo0KUAhsBSxHrqIiR7+/S1WYm7OvmYDEWsqouAfMY2U9qVb1I0BlvFQNtdTFxIPDOggLMXwGYgCGcthLVQEM5aCGuhIJy1ENZCQbh/3UKb3A3McjfQ87vKbA3gF63zXP+J2/hKuJUoRaxPLdGpEF36IDH2QneNvdCjlvjAb8pSbua2XTdz5ygTmtj6BZc6ff+sVaTtdOX1VStvGIaBOj8GcNhDDTqXrgAAAABJRU5ErkJggg==",
  TRASH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABdElEQVRoge2YsU7DMBRFDwxlgb0wlB9BLMDXtFvhE2BAogNDxR+1S+ETEBJiLqVSU6lVGOwoJsQhDnEc0DvSU63c+OXeuElVgyAIddMBBsAUWOqaAH2ttZoj4AmILfWoz2kleyiDNvNJzWjpSgxITUbAEDjUdamPJXo/kMdCpqQGhzn6laFPGvRVmg9Sg90cvWvoiyYM3QArfv5O+64VcG0zuVNwfAHsu+f2whI4yBN2LRNi4B714IUmQnnJxbYCecQV57ngfA3bCvwZJEBoJECGO9R7+9ZRawTzx8XGWutrR83lGl+o+zVadM5v5+ciz0BoJEBoJEBoJEBoJEBoJEBoJECGKPNZVqtM3QFGqD2ckaNWGdlWCY1LgK0x9rG/b/bcWs/K4BLgzRifOMwry6kxfvXQnwfSP9zPwDn1rEQHuNA9k/7jGvp+4xh4x21rvErNgZ6PAKDuus8Qc+DMl/mEHmqJX4BNDaY3utcYj3deEP4rn4hExm+tmh+HAAAAAElFTkSuQmCC",
  IMAGE_FILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB8UlEQVRYhd3WTYjNURjH8c9IozRlwUITTbMRNlNWxksWjKxkYbJQY6mUTCKxmDSkZiezm421KQsRFkgpL7Eg2Si3RJOFl5SIzVicc5t7p/9xz//O/5r41el2nnOe83zv8/zPC4usrgLbBPrbXO8DTuHHQgBm8QjvSwZfg0HcxV58L+nfBDDcht9w9P2IO1ie47SkjUCttBMDuIWexQB4gV3YiJutIDoB0AixoRVEpwCyIaoE+BV/Zxvac6zCdlwoclpaIcBt7EN3wdhxrO40wE9cS4wlt3Unv4EslQE4g5nYTlcFkFuCAxjH2dg/hzeY/lsAQ7iH87G/A7sbAPqFe6VWFiC3BDXheF0v7OsBIQOwEvdxpWzwlIouox48Mbe/H0dbF67jU7RvSaw5LVGu3Ax8w9aGti3aTmCPcP0+xdHM9f6o1HXcHQPXoQeF0+9k7I/Efm+BbzIDZQDG4tjLGOwtbph71CwTXkTjZQByS7ACo5jCK1yOgQ9FKMJJOIXDEaZtFWVgDF8iCKxDX4Fvr1CGkXn2BWWg/u8v4mu0vRZKMF8zuIpjGetmA4zGeZcy15zEJukt2aSck/CIkIXPmQB1HcTDKgD2S9zlLfQsZ1IOwIM2gmfrn3oP/J8AqW9gc8Vx1uJd7uSa5qd1VW2iKNhvOK12/OBuEgoAAAAASUVORK5CYII=",
  AUDIO_FILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADFElEQVRoge2ZzWsTQQDFf200qVrBUBAURU/aVgTFSvUoXsQqgoIUFDx68SKieBILeujJFhH/AD0VRBD8REHBD/zCIqUm6kG0UqltE0FFqqkedif7Nuymm2bTbWUfLLy8+dj3kpndmQnEiBEjxv+KDuAx8BroBlLR2qkMx4BJ4K9c5yN1FBD1QA9u4+bKVdjXPOA6kAf2h+jRFymgD7fp+yWfK0GztPsKNIbm1ANp4AFus31YoaYbIAG8l7YnwzJbiuVAP26jvVjDCaYfAOCQtB0FFldrthTrgSG5ySTWBFYEDbAHa7zfBBpsLQFkpf2JUFzb2Gbf0HT+C+j0qBc0wFWpd1j0g6K/qc6yg04sw6bjPFYgLwQNcETqZXGGYAoYk7JN5TpZAHRhTZ4/JTf3u4awhpIfggZYhDXOTd1dUnZR9HPlzD8MaNpcA8DKKYxVMonPSN3Lom8V/aNf464KjBewXjLpAKa8AqSAO8AXYIfoLVI3DyRtvQ4YlrIVXjfSZ+5xYH4Ac0HgFaBNtIxt0GBAyraLrpN8rxHrpcJq4b3A7+q9+2IQ+GHztcAWKbstXCfsE+HthmiAhPCJKg1OhZ/ANfm8U/hL4RuFPxfeYogGmGlcEd4uvF/4GuHDwpsMiTKAvpTU6IhwfUiMCm/CA9WsWcrBr99G0b+JnsDZS+RK9IKtF0NG+Qso6ny435dZ1KMMsEr4uPAlOCHyoqdx/BbrRxmgWXhW+FLhOoR03M+KAPuEPxW+Qfhb4cuEjxmiAQrCk9QWC4Hd8vmGcH15vRK+WfigIRrgg/Cj1DZEK84eN4P7F9C10Qvh+rZ+5tXpaWZuMZcE7mI9DvUt3Cp1c7i/xM9S5rmYmw3L6bNS95Lo7aJ/KtdBA3AKeEc0GxrdeXVI2QXRfTc0laDWW8oMzvxM4t6ptVVjXDFTm/oDooe2qTcI+1glB9zCfaySkfahHqsYzOmDLYM5fbRoEPbh7jppN0KND3cNyh2vj5dp54UkcA/4jvfDoabw+oOjZ5p9Rbbg7AAeYT1Fuqn9AjFGjBgxIsA/jvJ6jenUZ2YAAAAASUVORK5CYII=",
  SM_FILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAcpJREFUeF7tmFGOwkAMQ+H+h95V2S2qqlKcsZ101PADQpPEfnFHgufj5q/nzf0/GkAn4OYE+hG4eQD6EuxHIOER+CFnWJdkbf5vfAEwOoephbiPCoOaN4A/AswWmVpoSZ0ACBN3iNkiUwup7gRAmLhDzBaZWkh1JwDCxB1itsjUQqo7ARAm7hCzRaYWUq1KwJlQxoSr7xuOAsD2x85RPweAbzOh7S+HWACrkKXP9vNWgBoAMjMFwJHhT9+Ngt7DQ2faAXza9vrjZ5suVQIiM60AzoSsg/cxZRMQnWkDgAjZQ2DumuhlF9H30hnZTLj5ycWIbsg+EwUwIgQ16TgH60UAwM0cToiekG4EwNHNTuhKKYXMZ9wBKW53Q2DzUQAzJCFkfgTAlSGEzY8CuCKEIfMMgCtBGDbPArgCBMq8AkAlBNq8CkAFBIl5JYBMCDLzagAZEKTmHQCcEOTmXQAcECzmnQCUEGzm3QAUEKzmMwAwEOzmswCMQEgxnwkgAiHNfDYABEKq+QoAZxDSzVcBOIJQYr4SwBbC8rlMC/qv8CpS/V62+VLqaopMv+oEMNoltQ1AgnHiJp2AiZcnkd4JkGCcuEknYOLlSaT/AqRIb0Fn6qw5AAAAAElFTkSuQmCC",
  UNKNOWN_FILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAA+UlEQVR4nO2awQqCQBgGv6KeM+rU+1/L7F4RreY/W86ABw/ujsMPImwiIiLSwlh0XZIcit6piaoAY5JbknPNa31OZYAuI1QH6C7Co9zS63cXgQrQTYTqAMOL+9MC+35MdYBjniOgk1AdIOksAhEg6SgCFSDpJAIZIOkgAvkZfHcNmfDvsJkoOHeNlvVbuCbZtzzwbwGSRp/tzM1+nh0t8ILWiZo1MaufAAPQAjQGoAVoDEAL0BiAFqAxAC1AYwBagMYAtACNAWgBGgPQAjQGoAVoDEAL0BiAFqAxAC1AYwBagMYAtADNN84HLHFOqIzVT4ABaAERERGOO8QV911rDPw7AAAAAElFTkSuQmCC",
  MINIMIZE_WINDOW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAANtJREFUaEPtlbsNwlAQBMcRLQC10QZEiAAi0wa0xqcMdIiICGmejZ60znfPN3OWBzp/hs7fnyzwb4MxEAOSQE5IAtTxGNAIZUEMSIA6HgMaoSyIAQlQx2NAI5QFMSAB6ngMaISyIAYkQB2PAY1QFsSABKjjMaARyoIYkAB1PAY0QlkQAxKgjseARigLysACOAEbYCX75oo/gCuwrwXOwHauyY3njLVAbbNsXDxX3bMWuHd0Ot9gbrXACOzmQtZ4zvuE6iM+fj7ideMBU9XV1VyAQ/4DUyH+tbd7Ay+Srg0YYU5a1gAAAABJRU5ErkJggg==",
  CLOSE_WINDOW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA35JREFUaEPtmbfrFUEQxz+/0pwwFNoqmMCcc46olY1/m7U2Ys45IWIuDFiJCYyYC0X5ypwcx93t7O57yIO37c3Ofr8zszvhBujxNdDj+OkT+N8e7HugVzywGtgLPAB2A1+6BHw4sB+YBuwBLoTO8YTQMuAYMNSUXQM2AZ9CyiO/jwBOAAtt3zdgG3CuTU+IwFLgeAl8oesWsA74EAmySVzgTwILKgJBEm0ElpvlhzScegPYCHzMJDEKOAXMbdDzFdgMXKr73kbgFTAhAO4msCHDE6OB08DswDkvgImxBK4ASxzWVTitB947ZMsiYwz8LMc+XeZVsQRGmmvnOQ64a3firUNWIgobWX6OQ/6O6X4XS0DyIqHLNd9x0D076E1AdixwBpjp0HnbdDZ6N/QK6YymF6Lu/IfAGkD3p26NM/AzHOBdoekhUJAov9Ft5z8ClPiqJAT+LDDdAd6da7wEdKaypEgscgB4bCRemux4A68MG1pu8FIUQ0DyyglHgJUhFMATI/HTsulUx56rluU/O2T/isQS0J5hluCUpUNLJLQmhwSBi8AWQInLvVIISPlg4LBZ2H1Yi+Bly7bRRWIqgYLEIXt1ckioRJDlo8GnhlAZrDxxEFibyEA10A7ge+L+pDtQPWuQkVB1GrOUIHfmgO+EBwrAInHACjsPCZXou4AfHuE2mZw7UNYbk621TyWCwi67n+gEASU4hUPRSXmN2pGmKJdAKviCZDaJHALKyuqV1bnlrOvW2SX12KkEOgW+IJ5MIoWASgkVdYsdZlfLqeVpilTEqcd210Epz6gsfxRY4QCvTkovza+GiUOdimgSMR6IqUQL8EUnpWdWWdfT2UWR8BKIAa/+WJav9rBdIeEhoHpHYePpAZrAF+ESQ8LVG4QICLwamNqRRiWIQ+AL8ZhpR5BEG4EY8JpIqJmvHX3U3NaOkWgjoFpfw9XQ8lq+qsc7ldM+NU/b64C0EXgGTAqgj7V8HQnNiELTuedNWNoIKO4V/wqluiXwem2807gmW8gTbSQ0od4KnI/1gOSr/wYKHfct5nPBly+2Ro3VCbU6NYWx5km1K/QKaVN1zK7BlbzzOnQ5Ir/rYpdJCLziXt5pXB4C2qxQ2Qc8NXeG5p+R2P+Ja2Ktx2OK/cpqBa9dXgKF7O9UZN3aF0OgWxiy9PYJZJmvA5v7HuiAEbNU/AEymbExfA8cowAAAABJRU5ErkJggg==",
  SKIP_START = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEklEQVR4nO3YPy4FURTH8asQFBKvsAeNbQixBxqVxi70lqK2BZUlPKJ50SlQ+Ih4JMZ48+fOTDKT8+2/v3PO5M6deyelIAiCIAiC4A84xgPucZTGhq/Gv5m3zJhhO6OHWWtfgYbuOi7xhlecDelnDYA93Bb0xVB+1gA4wXPRHcr/RZMA7OK6rPAQfil1A3CAx1XF+/T/pSoAW7jCe1XxPvxKVgVgH3d1Cvfh16IsAGu4WG5tjejCb0RJxiZumhbuyk9NKck4z2g+208xgJEvoTT2lzhNYRudzIdsEkeJyRzmJnGcrnEheUoD+T/kPIHClfAFp0P6XV7qd7DRxs32P3+lLIeY47BVSBAEQRAEQZD65ANrrC3m/GFNbwAAAABJRU5ErkJggg==",
  SKIP_END = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVR4nO3XPWpCQRTF8RskEBBBy+wgvZuICNlCKgsrt5AqC3m7kGzB3l6tREgnUYt/GHyveJBq7pvRIefXn8sceB9zzURERETk7gBTYAdsgUnskAEwchwiOs/14I1NzIAZcALOwCfwmDnfElPg0B7BCnjJmHcX+MsRWAAPufPWUYHGEnjOmbeOCwR74C1X3hIUaFRAP3XeEhYI1sA4Zd4SFwguwAfQS5G3DAUaX8BT13nLWCCYd503FfgHj9Cl5Jd4XfJntCr1R7Yv+SqxLPUydyzpOv3tXEi8eXeBd+CnXgtjVkJv3legHhJ+KMOosDOPd6m/NWBSl9gAr7c+j4iIiIjdoV+nEzteGs3QogAAAABJRU5ErkJggg==",
  PLAY = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA40lEQVR4nO3YMS5EURQG4ENBr9dKsAMq9qCdLdgBSh1rsIVZAjZhelrTITGf3GIiCsm8mZd593K+7nXnb/7890WklFJKKQ0HGzjGKTajNbj17R770RK8+al8X2IrWuB3TziJhgMUM9xhJ2plMc84i4YDzI2xGzXR3SvOq6lcy3vAQcsBig9cY7vVAMNXrv584qLlAHN7GaAL/ZmVDRXr1tPxkzLH1378f6/RRxwOdvgKAaYtT4lxq2PuBaOokT/8oJkMVo0rPurfcTVoNXaBm+o2/hI/to7KHK6mGlNKKaWUYiFft4ARJbTJcIwAAAAASUVORK5CYII=",
  STOP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3YQQrCQAyF4XcQXffsFsGLqdhe4C8BFzLgYiAJFN53gc4/6WYimZmZ2UkAV+AO7OTbgQewVB7+Rb13fKsiIG6+y1oRUPHb/LNVBLSSAwaewCRlo5kcMPAEJikbzeSAgScwSdloJgcMPIFJykYzOWDgCUzSyR/1n4qAWDp1uVUELN+lU7UncEkP+NnOrbG3KTj4FjdfdngzMzNTvgMULRo3zp7/ZwAAAABJRU5ErkJggg==",
  RECORD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO2XPU7DQBBG3yUo+AniOkgQcQ3ID2ehA4EoKOlDuAmOcgpiOhJ9yNIUlguwE+/YEfOkkSxX39sdz3ohCIIgCIIgaAXBqWAieBdkgi+rzN6NBQP6huBY8CBYC/RHbQSvgjP6gOBKkNcIXq2VYNh1+Ftb0abhy7sx7XLldwlflvDdCcHJlm3zWzsdeQo8txheVo+eo7LOtGla62JnPQSmCcLLauQhME8oMPMQWCYUyDwE2pw+qlS+7wKfHgKLhAIfHgJ7/xGPEwpcewgMEh1k3y4HmUk8JRC4dwlfusCs2pw+gkM3AZM4b6mVNoJL1/CV/6JdLzSTTsKXJIZbtlPRNhf0AcGB4M4mSZ1Vf3Hv+QY3tZHgrThV7bcjt+eZ4MZtVAZBEARBEPwDfgDcyqJBiCPoQAAAAABJRU5ErkJggg==",
  PLAYTEST = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVR4nO3YQUoDMRTG8Y8W7NauXanHsL1JEfeKF9NTuLBTF7YHUTftCC2VvwSzKNKhJkLzpn0/CAwhMO+bFxIYyTnnDgrQA+6BCljEEZ7vgBNZBpwBM5pNwxoZ/vIzdns12Ql+ts1f3coaYJIQYCxrgHlCgLmsAT4TAixkDfCSEKCSNcBNQoBrWQN044W1yzislUVAPxbY5Bk4lWVABxhtKT7MddQW/KK2wQMU5h0ozWQHgEvgEfiI4yHMtSIAcAG8bznf34Bz8wGcO0bAEHgCavavju8e/Kf4L8pbZ4WI6a2Y5AQosW2arHICmCIPUJiOsQM1dizbfoxWOQEG8RIpbQ1cJQfYCBF+m68KFL6Mf/ryinfOOe3DN5wZTw/aQ/uuAAAAAElFTkSuQmCC",
  ADD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO2ZS07CUBSGCT4GDn2MQHch0YUYjC4EwwLAuRA0LsGIAxUHrkKjC/AxEnBMnXzm6DUhFeJ9tb3EfkmTJoXb/2/a03P+Fgo5OTnOAHPANlAHzoFH4B34UJvsP6hj8pstoBiC8HXgEHjFnBegCZSzEL4GnAAR7kRAB1hNS/weMMQ/A2A3SeELwCnJcyzn8i1+CeiRHtdyTp9XPk3xP9wCiz4MpHHbTKPjKn6f7Knail8B+lmr57vimZdYVedDoW0qvuzpJeWLCNgwMSDtgStXQEldDB9VrGnSmNn0NnHKsZ7JlWetBlB1lc5MWNcHFR0D0u6GauBAx0A3YANnOgZk8AjVwL2OgaFNtflz4d/nsalOfZ2FTeu/9USFeXUa/QsDQ8NFezYmlPibJG6hmX+Iu7NeRusBG6jpGJDQKVQDmzoGiip0Cq2Ze9JO81Ri5spXdbKsNpNoaIkPdKAZGb/tVdwXCkdG4pWB5UCG+oF1bipZZdbqgR0r8WMmJKvMipaT+LEZ+SID8VfAvLOBsXBXAte0uPQW7sZC3jQqU8vblZ9ipJpQdXpzfmANc9O2esG4MpI6L2U7FfExIyXVdkjoZIr8p2EzTydhRBrAiuQ20rPL4KEmu0htsn+njtWkqwziM2tOTmH2+QRxCeic7ZLqUgAAAABJRU5ErkJggg==",
  SPEED = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVR4nO2ZS04bQRCGrcAmu0BWAYM4BCE5R4QQJ+G55bEFEZQLZIEgCYiHcw4QF0hgQWJgazubLyqpIjWOx1M93fNAml8aaTRWd/9/TXVP/eVGo0aNGsEAXgDvgTXgK3ANPAJ/9HrUZ1+AVeCdjGmUDaAJbAO3+OMG2AImyyD+GvgE9AhHF9gHxosivwjcEx9tYCFP4qMadSvOJT00zVoe4z7KWrHJvwTOPCPadMZPeY49lTVjRt6XfKiAfyLC34Rn2rhoafoI+e8Z59iLsWH7cQFMa37LfSiOVWjSXpkPOSrvU1JDhITgwE0TFdGP38BYzNSZiiTgCfmUveKXShqJXkpuz3gej2nkRzWdkj52Ez4CpDzIC0nkD1LGbfoUZj9zIn84gPwI8NkwVuqtEYsAqSqrFHkXcxYB61Qr8i6WLQK+UU3ygiOLADEeoZATbGnQyZEhbVxcWQQ8RKgqB75qI/nzIeu1LQJ6EYqygWe2MfLNIet1SxMgz4xjm6ECHiJUlf+lELBiHNsasl67yE28rFGf0PsY/vnKIkDaIlXFoUWA9HaqiiWLAGk6VRWzZRdzIfhh7uZpx6xq2DCRVwGTaiIowBNfGObreBkaFSHtPnL2xNb5dr3IO6Ze2n15eWLrfL8ymXqdcCEnT+wz34dM5B0R0qssCztB5B3zUcbX+Sxak1ebu9KrLAon0Zq7fWZkrwDyu6buQ4CQeT0ZYuMueMN6iBjTt5H0sfNBR6P+qhDyfUKk1t/MWDtJbbMBvCmceEIBOKeu60iMhzq7nl5yf6m/ibl5W4m/WWvUaDx//AV2V/CQip4uIQAAAABJRU5ErkJggg==",
  UNDO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR4nO3Wv0tXURjH8dtgEuJaoEMSguBQBNUiVGv9D41uTg3S9EWiobGpv6Gh0Mk/IAyKnIxoq8SiEm0Q7IdErzh4S9Hvr6vnDMHzXi/3+Zz3c89zzq2qIAiCIAiCIAiCGixhGaerBmAA19HCAl7jK3bwDR+wgnnM4ipONsnodyF/edWPBCbxEBuas44HuFBCoKsEJupO/5aHJ6lmboFDEvVWuVtvjdzs4H7KyCnwTwIjeKE8zzGWU0A9lGkQu5GGdREzmMI4hnAKo7hcP3uE7R61vuB8ToFufMLttNgGOcOYxvsuddPBcLGkwC/MpQ437tRe3iDu4GeHjM/p65UQ+JjO/aMuvE3uJbztkPWs78FuINDXPdFQYgRvOuTdyy1QSuIMVttkfce53AKlJK7gR5usxyUESkm02uSkQR8sIZBdwu7d8e5AxiZO9Hpx7RgSL3MJJHANW/u6f6vqBW4cQ+JplRm7vzA3cTZ37SAIgiAIgiAIqv+aP0/ezoLd5BjTAAAAAElFTkSuQmCC",
  REDO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABi0lEQVR4nO3WPWsUURSH8Y2oIJKYRhdiEa1SCJqXVvAzuEXMB5B8BEuLiKRIk8pSLC1WSJMqBEIgasoglmKRYBaVFEGEpPAnK7dY193ZndlZWOE87cw59/nfe+alUgmCIAiCIAiCICgILuM+nmADBzjET5zjBB/Ttad4gEs51xjHduqTqzar6V2s45v8fMcL3OlTfq+ltjqo+EzazTL4lXrN9ClfPEAalbU0FmVzjmet49FFvlgATON9hsBXvMIy5nETV5pCuI4FPMYbnGb02cdUhnz+AJhLM9uJXdSap5PzJBfxoUvPoxTEwAFwr4v8JzzMtRP/9r6AR/iSIVs8QBqbTm+YOiYGkW9bp4qtUgOk2X3boXilLPG29a6hUWaA1Q6Fz4ckP57xwOYPgNs4ayuqD0n+KnZyyPcV4HVbwWdMjsDO9w6AW+nr2EpthOR7Bpj1N+8wNkLyPQOM4eWf2zhu/rCVKZ/W2FScH339jeIGLpYtn3o3vyNFaGBpGE5BEARBEARBEFT+S34DOXeCiMi4hZkAAAAASUVORK5CYII=",
  CUT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxElEQVR4nO2YvWsUQRiHRwMKKojkQxMUOzWiXbCxU7BQMRFRrCKKtQqXiF8EY+dfYEQrxcZW/QdEbMydWhhQLERR8QPWJIrBmHtk2PdgGXZnZ/d2zyn2gYMQZmZ/M/N+zatURUVFhbcAvcA1oAH8lJ/+exLoUT4DHAZmSeYHMKI8Fr9EOkvebYLQbGwnbxJ4ZU6ENh9lAagB/fKryf+iXC1Jy3JgFHgDfAGOu0x6boirxYwZN8Y0ShC/B6gb3/nsMnHOmNQfM2bAGDNXoPBB4EGCub5yWUDbdJR1DhsIChC+HrgBLCaI15axw2Uh89rOOJjQszaErwIux9x8i4/AKe0PrgteMhbQDnsO6JaTH49x4gs5HfQE8CFB+C8JKGuyLtwHfMOdr1nDKLBXMnpSbrkDbMx6KNEPHLLYYpQ/wIEM624HHlnWewwM5RZufGw/MJ+ygVHHtTYANy2H8hY4Uohw48Pa5u8CTUs9dB5YaXHQK5aDCCQxrihcvCFkCHhquYn3kjGXRRz0KPAuYfyi3EhfqcKNTWhRpyWlJ/EEOAm8sIzRSWpbx4Sb6LCma5+YUJrGjPYr5QvAlpSI0kKH5LNAl/IJYDUwIaE0jt/AdWCt8gmgS1K7TvFx6Ih1D9isfAPYB7xMceJdlvm7gVu64uy08EHgvmsYjZm/ScqDZkfDKOEL7DbwN08ikzW2At8tiWyslESma5yCS4mpjpUSwLDl1KNoQQe9KuYIy+mkK08qp3tzlNPm27tFs61yWl5HWbsSF3160NRzdCWms24gw5PyU9YnZZCjK1HUo34q5VG/s6y2ymy7GzAc/WHCJmZUGjHONeZgQnVVTmOrYZqTy0TdOo+yIMlmwNKVKLu1+Fpqr2Muk3okw7qifaZb+QQwkqG9Pqx8hHATQcrJ+yneMKdJyQ3zEqGm5Unpl9lUVFRUqP/BP5CqMiH1c5cpAAAAAElFTkSuQmCC",
  COPY_WHITE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2klEQVR4nO2YQQrCMBBFcxBd9yr2qBbBO9mtis0FngS60CiV4JAx9b9tFpmX+WFgQhBCvABsgQMQqccI9MGo+As+nCwE0svTskD0Kh7YWQg8EVoDCTjDP3SAunMiAkegMxFwnBPXdLeFgOecGCwEvOZEYrIQWDy3htL7JGAM6kCG/kAhKEIZilAhKEIZilAhKEIZilAhKEIZilCFCI1Lu8oWOtDPEm93lT8v8AkJFII6sMIIRfy4WQikRasXewuBbl601uYMbL4WeNhQD2lXWaHwKb28WfFCrIw7KN2RSPl95zsAAAAASUVORK5CYII=",
  PASTE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nO3ZQUoDQRCF4Ua8gC41rnMVPYSoxzMIgopXEPUWcatiZuH2l4JeTBokdlXsacL7YFYz01PVr1bTKcmOAfaBK+AV+M7XC3Bp91LPgMNc7G+egYPUI2AvF7jJkz2begNc8HfnrYo6AW6AgXoPwDEwAx4d7w/ALTCPFP+B36xYy+vT3vc0YDsfcTRay5KIWHga8IzN2F0eH7vug2utPA2s2XQ/KlV+Xw0Ab1sMYDlFAmdbamIJnDZv4L+hBgpKoPUGogRiUAKF4IYqgdR8BpXAOiWQNEJ10AgVUmNEv68GglACheiOKoFaSiCI6AjvQgID/fjyNGCHC7249jQwz4cLU3sfH5bUNmEnKwv7Pz9B4SvbeXfxIiKphR8IWaCtfT4/XAAAAABJRU5ErkJggg==",
  UPLOAD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVR4nO3dO48NcRjH8e+6NbrtCI2Iuyi20aHQigQlXoDE5Q2IUqKgFC0SkbhWVqXyAiRqFHYRbOy6LvHIiZnkSBZnZ2bn9v9+kl8/8/zyzDlnTjIDkiRJktQNa4BbwEfgLfAIOAOMN31gKZgAXgGxQJ5m5WiJ7AE+/GX4eZ4BG2ygegeAz/8Zfp4XwEZLqM5R4PuIw88zDeywhPJOAj8XOfw8r4FdllDMGHCu4OCHMwPstoTFWQ5cqWD4eeaAfZYwmlXAzQqHn+cTsN8S/m01MLkEw8/zFThoCQsbBx4v4fDzfAMOW8Kf1gJPahh+nh/AcUv4bUv2wylqzuCr7QkSNwG8aWD4wyWcJlF7R7ivU1fOkuB9nS8tGPxwzpOIYwXu60RNuZD9Au+tUyXu60RNuQwso2fGshWPjuQasIKeqPq+TtSUG8BKeuBiC4YZBXOJHnjegkFGwQz+3uy86RYMMgpmih44kp1IF4d/qOnhtUGUjCyg28INsICkhRtgAUkLN8ACkhZugAUkLdwAC0hauAEWkLRwAywgaeEGWEDSwg2wgKSFG2ABSQs3wAKSFm6ABSQt3AALSFq4ARaQtHADLCBpUyU24GXTB98H10sUcLXpg++D9cD7AsN/B6xr+uD7YjNwB5gdYfCDB4DcBjY1fdCSJEmSJElSEduB+y160m20OIMZ3QO2UZGd2Rsomj6x6FjmstmV9rAFJxMdzeBlFKWf+TnfghOJjmY+m6EF0NECvARRqoAHVMAPYQoNf7aqD2Gyr1R3s5eiNX1djZZnJvv/emtVw5ckSZJEr/wCliFWxPec8VIAAAAASUVORK5CYII=",
  PLUS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR4nO3byUoDURSE4do5D+/g9HgOIILDQvDpVNxonBLwEYygy1DScHUhIumm23v75P/gbMzm3KIWEU4kAAAAALNgQdJ87iWiWpd0IelFktOMJJ1LWsu9XBQ7PwL+OVXg27mX7LtlScM/Qv6aJ0lLuZfts6MpQv6aw9zL9tlNjaCvcy/bZx81gn7PvWyfueagIYL+J6bRBB2KaTRBh2IaTdChmEYTdCim0QQdimk0QYdiGk3QoZhGE3QoptEEHYppNEGHYhpN0J2q7tsO0lXQW4PGueczTm/f7/LWr7rYvC/gsS5kBpI2u7jqJGT9esXa6n32WQENcqFz2mbQowIe5EKnut9uxZykSQEPcqEzSRkRtHoStKb8ecOszlAtOi3gQS50jtv+ejco4FEubB4lrapl1ZdzwtZ3yLeSNtSRRUl7kq7Sv6OesRlLupS0m7IIwzUHDRH0PzGNJuhQTKMJOhTTaIIOxTSaoEMxjSboUEyjCToU02iCDsU0mqBDMY0m6FBMowk6FNNogg5lXKPRr7mX7bPrGkFXF0Ro6KBG0NWZFhpamvKw8i7aLVwOW5Ie/gj5vsurzlmzIukkXddP0jynv1WfoQNzbf5mBAAAAICK9QkSkO5NnQjE8wAAAABJRU5ErkJggg==",
  ADD_EVENT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVR4nO2Xy0oDMRSGi6Ib6UpxpUu1TyC6E19AqW19murWqm+hiDd8A0Vw6WVrpdo3KNjWdT85EHEImWk6kzazyAcDZeYk+f/pOZmTQiEQCAQCgUAgEMgVwDJwC/TwTw+4A9ZGEd8hf3SAJRsD8ubzyrWNgTykTRxdGwO5phAMxDMAXoA6sCW7BjCnrpK6dwC8krN/YABcAatDJ/9fQ8zdqLFeDXwC67bCDWttAG1fBp6AxbTiI+vNA/eTNvAAzBjGzgL7wAXQBH7U1VT3ahITM+5xUgYkbeYN4/aAL8vxZcP4BZt0ympgoOc8MA2cMjonwJQ21+awws5q4NIQn0b8H41RW5ksBgb6VqnSxmqhhHl3tbjSuAw8Gwrv04GBtl7YwFsWA3HNXF2Lk90GBwaEqhZ7iJlvGwNyeDCxpcXJtujKwLkWux0Td2v7mTcdaPT8/0gSbLFOlKZBg45oWrGdfEkOD9J/RyYoJqVaRgM97Vkx8qyrdiY78SMI6Ds00HUqzlKAyxR6H4/KZAEui/jMh4GaQwMVHwZmgJYDA1+mDnVSJsoODOx4ER8RJl1lWo68ilcGpoDjFOIbejvtFekqk2oiQst72gwp7Kr0NrK3q49dX/2WexXTUTQQCBRS8ws6Beac36b8wwAAAABJRU5ErkJggg==",
}
