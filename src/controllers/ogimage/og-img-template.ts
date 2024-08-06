export const templateHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <style>{{styles}}</style>
  </head>
  <body id="body">
    <main>
      <center>    
        <div class='logo'>
            <img src="data:image/png;base64, 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" alt="Red dot" />
        </div>
        </center>
        
        <div style='display: flex;justify-content:center;align-items:center;'>
            <div class='left'>
                <div class='top'>
                    <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAA+oAAAPoCAMAAAB+iPTrAAADAFBMVEVElV3CcWLvRXHn4tz1hG9uqoEihEC0s7V1QVBKQ0T7+/yPQldaSUhjQUv0pmDB1chgQUqDQlNTnGmGhYeqq6xtQk7S09T////95tHFRGaTX1f0oFfL2tDjfWrW39pZWVqTvKCrybZnQUxFREa/b2JNTE7p3dO5ubqtaV3f4eG8vb71n1Pr7Oy2z7+Li4yfQ1yKQlbKdGStQ19Hl2CYQlmTk5Wfn6FramtVR0emZlzQdmblRW7R3Navr7CMXFRaQUl8fH7xs31lTUuTlJXrzbFmTktHRkizQ2GAQlOxal7m5+jD1cp/f4BNQEXyqWi70sTtxaHxsXrYeWj6uX/ExcZVoGw7kFVuUk3p2MigZFq5bmA+klm6RGPwuYfm5eWHWlPsyavbemmDtpPeRWwriEdSR0dQm2iCgoNPTlB8V1Hp1sWKuZnyrnJ6QlLvv5VeQUp4d3jAQ2TsRXDHyMliYmOqQ155VVDLzM3uxJ+nx7LW1teioqOWlpdyUk5coXKhxK32mUe1RGHSRGlJSEqawafmfmvi5ORXQUhxcHLxgm7rgW2np6nAwcFHQENkpXiAWFKlQ11gS0pSQEfZ4Nx6sYvo2s7wtH6bYlkyjE5UU1XYRGvsz7VoZ2rPRGg2j1FWnm11r4jMRGf2nU5sQU5dXF5kQUvY2drd4+FIQkR8QVK3RGHd3t6nQ17H186YYVjwtYHIRGfffGrOz9CNu5zo4NjvvZDHcmTbRWzZ2ttKQEToRW+pZ1xfXmBCQEKxQ2C1trfq0rx/s5DyrG2DgoWxsrLr5+OyzbyiZVtQQEZwrIPtwpp9V1G7bmHjRW69RGSkpaZcSknVeGfO29NqqX5NmmTWRGpNREWVvqOtrK6CWVLr0LlqQU2kxrCHt5fCwsTNdWV1dXf0o1xmZmfgRW3n5OHZ4N3o3dTq1MFFQEOkZltbWltXVldXSEh2VE9EQkOew6tUQUd6entQRUZRUVNBk1ooh0Xp3NAvi0vp2cvsyKiVYFfxsHZ2r4jryq1BQEL3lT6JJYLtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAaiklEQVR42u3df5hVZYHAcbk7jcOOFBOMu1jWSpqo28yEFxUJyJIYJim3dTOJYs1S2qJJCNlESqkERALZLWs2bA0tR8nI3WRFh365SZlQGUXS42a2G5qYP7at3N270fY8PjP3njvOOOfe+77nfj5/n+fe98x5v3N+3HPuPeQv/w/IvkOkDlIHpA5IHZA6IHVA6oDUAamD1AGpA1IHpA5IHZA6IHVA6oDUQeqA1AGpA1IHpA5IHZA6IHVA6iB1QOqA1AGpA1IHpA5IHZA6IHWQOiB1QOqA1AGpA1IHpA5IHZA6SB2QOiB1QOqA1AGpA1IHpA5IHaQOSB2QOiB1QOqA1AGpA1IHpA5SB6QOSB2QOiB1QOqA1AGpA1IHqQNSB6QOSB2QOiB1QOqA1AGpg9QBqQNSB6QOSB2QOiB1QOogdX8DkDogdUDqgNQBqQNSB6QOSB2kDkgdkDogdUDqgNQBqQNSB6QOUgekDkgdkDogdUDqgNQBqQNSB6kDUgekDkgdkDogdUDqgNQBqYPUAakDUgekDkgdkDogdUDqgNRB6oDUAakDUgekDkgdkDogdUDqIHVA6oDUAakDUgekDkgdkDogdZA6IHVA6oDUAakDUgekDkgdkDpIHZA6IHVA6oDUAakDUgekDkgdpA5IHZA6IHVA6oDUAakDUgepA1IHpA5IHZA6IHVA6oDUAamD1AGpA1IHpA5IHZA6IHVA6oDUQeqA1AGpA1IHpA5IHZA6IHVA6iB1QOqA1AGpA1IHpA5IHZA6IHWQOiB1QOqA1AGpA1IHpA5IHZA6SB2QOiB1QOqA1AGpA1IHpA5IHaQOSB2QOiB1QOqA1AGpA1IHpA5SB6QOSB2QelVdCsMl9bgaf91bzrzvY3/UBcP2z286/VunPSD1GDr/7zN/Y8IyIm/9ynteJ/WwPfCln5uopOBnp3/8UqkH64Qv2aGTmvtOk3qgPm6PTqr++nVSD9ALznyruUm6PvYWqQfna/eZmKTvb0+Qelj+wlk6FXH6A1IPyWn/ZU5SGf/wXKkHtE9/qRlJxVp/QOrBnKe/yXykghfiPyP1QO6b+YrZSCV9S+phONNcpKLe+gWph+ALpiIV9jcPSD2Aw3f3yFFxZ0q99t5jHlJxP3u31GvtuT5RpxpX4aVup05dXJn7mtRr6wQfqeNsvR5SP80cpCpeeoLUa+q35iDV8QWp19Jn/sMUpDp+K/Vaevcgm+am4/cuXz79yuMG34BLpu/efegtz7SZl925e/edy0YwT+4fv3s5QVt77L8Mugl/c6nUa+hLZTfMseN+Ufh/17VdWXahK8845g8LvXjK4YP8N2h78g9LPdn27Go/64wPFYjAyeMH24zPlXoN/W+5uMa95unt17ewLXmvffEr+2/mKWVe6vJx/Zcad/nwSx+noWh86v7y2/E0qddQmY/a7nzfwA24+vik/f7CAcv0nXxx4i79uoEvdceSYYZ+8U8FFJPpZbfke6ReO5cm/4TL9OtK/lmXtv7lko18R0LrZy0sXmrh8Fq//H3qicuXs3ldLvLUP5N8Bn5H6fZbXXwMvyzh9Pnk0kt7D5cu9fBxw0n9DO1E5slyV+fuk3rtvCBxP5pYV1vRUquTFrqk+LUuSFrq68Mo/VjpRGdcmW35c6kHlvr0xO23cOB1+L2JCz1adAh/f/JcOGvoqa9WTnwuTt6Wb5J6YKk/nrz9Bu7WT05e6NVDOvo+Y+jX5PqEE5+TpB5F6stek7z9Hr6p30KHl9nIdwx8mqnMS31oyKlP102E3iv1KFIfX24D9r8Iv3ZIx27Hl1vqyqGmfoluInSd1KNIvWxde/st1FZuoWP7v9TyckvtHmrqbbqJ8Rq81KNIvW0oZ2BnDOX/QdeUcktdInWpS73WqY8bSuqvLLfQ+CGlPkXqUpd6rVMv2+faofw/GHCr1EnDvEQrdalLvXqprx3KaXjZs/BbBr93NumMfjBTdBOhF0s9itTPKvevuv/F9SVlFvrkwNtiy82Fm4aa+lrdRGi11KNI/fIyN6hdMGCp65IXahvSvW4/GfLn6rfoJkKXSD2Ou+V2J26+voEPLJU5DS96au3QIZzQD84TrBFaJvU4Uv/s6mfeqZfZrY8b0i3sq4fxuMt44USn3EGb1ENLvevQhaWb744rh/DI2YtLzsGXvaR0qQ8N61unTpZObJZIPZbUu046piTivaULlWzi19w/pJvY7xzWV1PcslA7cSn7SarUw0u966Sivh5O+nrA4tafTLyzffqjA5d6yfRhfuHU8ceoJwPX5KQeZupddw44yX78+OSvjRjwbTXvLfOU8pIBh+AnD/er5Q6eBDiGj8cxg3xnrNRDTL3r4uVPx/6T8WW/IWr501/8tnqQq+p7P/V06Huf1ZdD7/b9cpGE3vbZLqlHlnpX13H3724bN27K2sF3w8vWtl0wbsr0wb/sv+vw8VO+/vUpew9/1r/4sGR52wWEbdwlz3ATpNQDTR3SJXWpI3WpSx2pS13qSF3qUkfqUpc6Upc6SF3qIHWpg9SljtSlLnWkLnWpI3WpSx2pS13qSF3qUkfqUgepSx2kLnWQehSpHw+pkHrgqft6VlIhdakjdalLHalLXepIXepSR+pSlzpSl7rUkfoQUv/TuEmdqqX+r1GncsifRO2PpU7VUv/zqFuROkhd6khd6lJH6lKXOlKXutSRutSljtSlLnWkLnWpI3Wpg9SlDlKXOlKXutSRutSljtSlLnWkLnWpI3WpSx2pS13qSF3qIHWpg9SljtSlLnWkLnWpI3WpSx2pS13qSF3qUkfqUpc6Upc6SF3qIHWpI3WpSx2pS13qSF3qUkfqUpc6Upe61JG61EHqUgepSx2kLnWkLvVIU3/iwM1z5tXYnKsvekfZAe7szU++bEQm5xfNVa3U6zz19aMagnDrgr7E8fV1XJtLwdYW2Uq9nlMffc6ahlA8lLRj796SS8fiDauEK/X6Tf2choBMfbRkfOuW5lKzQbhSr9vUF6wJKfWGGSUDbM6lqEO5Uq/T1PtGBVV6w8tHFw1w5p40U9+0UbpSr8/UDzQE5u6iAXbkUtUpXanXZ+o3h5b6XUUDXJpu6s7WpV6nqU8KLfV5RQPclW7qN0pX6vWZ+rzQUh9VNMAJ6aa+S7pSr8/Up4aW+pyiAc5PN/Ud0pV6faa+ILTUjygaYD7d1PPSlXp9pv6dI8Mq/YpZRQNsSjf1zdKVep3eQvNQWKlPKh7fbbPTLH3yfulKvU5Tf9WpIZX+hrNLBtia4j00KycqV+r1mnrhooBa/+76hPv5WralVXqPG2ikXs8Psa4I5t7YWy9KvHd3UUofuF3YpFup1/Xz6k/MODqAi3MfGXXEKWUG2N28a/FIO98+v3mmbKVe91849chVs2rsqkcGHeDG60dop2alLnWQutSRutSljtSlLnWkLnWpI3WpSx2pS13qSF3qUkfqUgepSx2kLnWkLnWpI3WpSx2pS13qSF3qUkfqUpc6Upe61JG61EHqUgepSx2pS13qSF3qUkfqUpc6Upe61JG61KWO1KUudaQudZC61EHqUh+JVb35yRmyNN9b/uceb1jx1KQ5lXL7Uwf6pC71UFPvzm/KZc2m/GPJoS+o9M/V37qgT+pSDzL1fbtyWTR/YsK6jn6oCj9FP/UdUpd6gKnvm5DLpvljS9b1B1MbqmHqDVKXenip78hl1ZaSdZ3RUB0zpC714FLvzWzpucVNRet6ysurlPqph0ld6qGlnt2dei63oWhd1zdUy4+kLvXAUt/Zk+HUtxat7O1VS32q1KUeWOqrMlx6bnHRyt5atdRHSV3qgaXeneXUc+sGruy/VS31W6Uu9cBSn5nl0rcVfeg1r2qpz5O61EO7LLcpw6nvKlrXq6uW+tVSl3poqbdnOPXmonVdsaZaqR+QutRDS/36bZktvWds8d3o1TqC/7ZbaKQe3t1y+cxef28uWdcD51al9DeskLrUw0t97oaMpt6esLILjqxC6Vcs8LiL1EN8sm1u/sEMhr6neW7Syv6o8h+4vXy9h1ilHuhXU7RuOS9joa/csLnMU+OP3HxqZUO/+TsFqUs92C+cmruvNUOaxmwcZF37XnV2xay4anS1N53UpU5dkLrUkbrUpY7UpS51pC51qSN1qUsdqUtd6khd6iB1qYPUpY7UpS51pC51qSN1qUsdqUtd6khd6lJH6lKXOlKXOkhd6iB1qSN1qUsdqUtd6khd6lJH6lKXOlKXutSRutSljtSlDlKXOkhd6khd6vGnvn9iR/uGDGlvuX7wFZ7ZmU/hXTr2rZO61GNKvWl25n78fPHkfYOE3p7WT0Bf1iR1qceTev7BXAb1dJRb30UT0nuXafn9Upd6JKnnc9k0rUzrrdem+jZ5qUs9jtR7p2U09dye1r6E9V01P9132d4pdalHkfr8XGYtTVrfjrTfZZfUpR5D6q2Ls5v6tu6q/GtrkrrUw0+9rzmXYb2lK/xY+v/a8lKXegR79aVZTj0hws3pv8tkqUs9gtR31Ffqfa3pv8uNUpd6BKlvyXLqzaXrO6ZKV/+kLvXAUu/IcuoJF8we66nGPxSpSz241Mfek93SV86txhnL9jFSl3oMn6tn+Ag+8dJ4r+N3qddn6hNXZrX0CTOr8b9tz2apSz2K1AudGW19a5lbW7pTPYTfk/n7YqWemdQLi7ZmsfRdreXWtzvF/fq1vQWpSz2W1Aszmydk7PbYaRd2bBzkFsHO2dvSeJfFW/MzC1KXejypF/oKY1ubMqS1+5nWeNW+FN5lTKEuSD1DqYPUpY7UpS51pC51qSN1qUsdqUtd6khd6lJH6lKXOlKXOkhd6iB1qSN1qUsdqUtd6khd6lJH6lKXOlKXutSRutSljtSlDlKXOkhd6khd6lJH6lKXOlKXutSRutSljtSlLnWkLnWpI3Wpg9SlDlKX+sjccPaMc+6qtXOOODC6/BBva2pur7R8y/VSl3qGU//BglENYTj1qXckD3FVflNVfhD6ntmLpC71rKZ+yqSGcBw9K2mIm3dV7dff78nvl7rUM5n6YXMaQjIqofWJF+aqKC91qWcy9asbwjLn0eIRrptdzdJz23ulLvUMpj7ri4Gl3rC+eIgtueratVPqUs9e6qHt1A/u1ouHOLvKqeeapC717KU+KrjU31D0kdvOnmqnnpe61LOX+hXBpd5wysARzqx26bnZUpd69lJfE17qhw0c4Ziqpz5f6lLPXurnBlf6mkcGjrC76qlPlrrUs5f60cGl/t2iEe7fU+3Um6Uu9cyl3jcjuNSnFo9xabVTb5W61LO3Vz/su6Edv68oHmJTta/K9Uld6hm8Wy603fo5pUce7VUtfWVEO3WpS33oHr0rrBtonigd4sZq3kSzvcM98FLPZOqF0TcfGUzoV0z9TtIQuzdsr1bpWzsLUpd6NlMvFM6e9JEwQp/3znJD7L1xWjVC35QfU5C61DObeqFwyoq731lr61dcNdgQx7Z2Lqqw3okbCwWpSz3LqRMpqUsdqUtd6khd6lJH6lKXOlKXutSRutSljtSlDlKXOkhd6khd6lJH6lKXOlKXutSRutSljtSlLnWkLnWpI3Wpg9SlDlKXOlKXutSRutSljtSlLnWkLnWpI3WpSx2pS13qSF3qIHWpg9SljtSlnoHUuzub8yPTMnFd8ktPbMlHomWfrKWe7dQ3L03jp8XnL0p46UU3Vu1Xy9NYhU5hSz3DqTf3pBPK4vadRa+8M/9gLirT2ldJW+pZTb15cWqlbCk6iG/PRWfLfm1LPZupN52XYijNA166ZXt8qRetAlLPTOqXpdnJpv7Hv49dG2HpuZ5ucUs9i6lvTnfP29F/p56Lkt261DOZenO6nVzW76W3xJn6bHFLPYupL023k039XnpXnKlfK26pZzH1Hel2cl6/l94aZ+o94pZ6FlNP+Sh7Zb+XvjDO1DeJW+oZTL2vI91OJvd76fY4U58sbqlnca8+Jt0r8C39Xro3ztQ7xC31TH6unup1uQn9P1ffGOUR/LU+V5d6NlNv3VahnfrB3fq0CFNv0bbUs5l6oSW91vNF98Dn4yu9vU/bUs9o6oXOlSk9FtZckklHT1yhP5j3tIvUs5t6YWx7CrGft7S1dIfY17plZTyh9yxtErbUs5x6obBuc2/LiHQ27Szz0o9t7myJQmerZ9WlnvnUQepSR+pSlzpSl7rUkbrUpY7UpS51pC51qSN1qUsdqUsdpC51kLrUkbrUpY7UpS51pC51qSN1qUsdqUtd6khd6lJH6lIHqUsdpC51pC51qSN1qUsdqUtd6khd6lJH6lKXOlKXutSRutRB6lIHqWc59Y2LOpoD1lH2xx9/b3NLDYfWsu82qUs9ltT3bdgW/O8ht09MHvvO5gk1HtqE5plSl3oUqXdsi+HHz/e0JI194o0BDG3+PqlLPYLUOx7MRWFbR+nYr98VxNC2tkpd6sGn3hRJ6Qdb31w89nU7AhnajbdJXeqhp74jF42lxWNvCWZoHVKXeuCpT1wcT+rTxhYNfnYwQ5sgdakHnnpzLiJFV+Y29gQzssVjpC71sFNfGlPq7QPHPjagoTVJXephp74jptSLTtYnSl3qUh9q6lsi3qtfL3WpS32oqXdEfK5+W0CfE3ZLXephp77vnnhKP6/42tfkYIa2a7/Upe5z9Yp9rt4ZzvFGn9SlHvrdcj2xlL6y5PbT20L5/GD2XJ+rSz301AstkRzCP5jwvEt3IPfAZ/p5F6lnJfW+lpUxlL4p+cm2EM4/LvNkm9RjSL3QN6b9vOAfdWkvc4l7XUftn1ffWZC61GNI/aBVTS0dAWtp2lh+7Ps3d9ZyaPvmFgpSl3osqR/ctYc82foKSF3q6aQOUpc6Upe61JG61KWO1KUudaQudakjdalLHalLXepIXeogdamD1KWO1KUudaQudakjdalLHalLXepIXepSR+pSlzpSlzpIXeogdakjdalLHalLXepIXephpP7EigUzUnHRVdKQutRDTX3WXec2pOUj8+4Wh9SlHmTqC9IL/ffWnPOEPKQu9fBSn3FkQ8puH60PqUs9tNRXpF56Q8MR+pC61ENLfU76pTecO0sgUpd6WKnPWlOB1BueEojUpR5W6jMqUXrDtwUidamHlfqkiqT+RYFIXephpT6vIqmvEYjUpR5W6rdXJPVzBSJ1qYeV+hEVSf1ogUhd6mGlfvYVlUj9ZoFIXeqBfa5eiZP1I18lEKlLPbDUD3zRTh2p10HqhRmpH8JPukEfUpd6cKn3zUj3ybYrHjpMHlKXenipFwqzbk9vx77m6PXikLrUw0y9UDjs7hlHpOJHHnSRutQDTj09fdKQutTrIXWkLnWpI3WpSx2pS13qSF3qUkfqUgepSx2kLnWQutSRutSljtSlLnWkLnWpI3WpSx2pS13qSF3qIHWpg9SlDlKXOlKXutSRutSljtSlLnWkLnWpI3WpSx2pSx2kLnWQutRB6lJH6lKXOlKXutSRutSljtSlLnWkLnWpI3Wpg9SlDlKXOlLPVup/FbV7pU7VUn9h1K0c0hi1N0udqqX+vKhbkTpIXepIXepSR+pSlzpSl7rUkbrUpY7UpS51pC51qSN1qYPUpQ5SlzpSl7rUkbrUpY7UpS51pC51qSN1qUsdqUtd6khd6iB1qYPUpY7UpS51pC51qSN1qUsdqUtd6khd6lJH6lKXOlKXOkhd6iB1qSN1qUsdqUtd6khd6lJH6lKXOlKXutSRutRB6lIHqUsdpC51pC51qSN1qUsdqUt9hP5T6ki9TlNfbZKShrNKptbrpV4715SmPsUkJQ3HlUytb0i9dt7+uZLtsdckJQUPl+5FPij1Gvp8yfZYYpaSgveWpv4uqdfQ+0u2x3GfNE0ZuSmlqX9T6jX0rtINsts0ZcQeL51YXedLvYY+mrBFHjdRGanPls6r7/1a6jX0xhcltH6MmcrIHJswrX7cKPWwTtYPOsNcZSTWJs2q/5F6Tf1j0kbp+vIvTFeerU/dkjSn/u5Eqdd2Bb6X2PrFbT81ZXkWFv7k1YkzquuXjVKvrT/rKuOmY6fA8KxdVm46dX1U6jX2/Bd1QcUd9Xap19oPTUMq795Gqdfa+S80D6m0D/5K6rX3VRORCnvFpxulXnuf+LGpSGV9tVHqQVyZe625SCX98tdSD8O9rsJTQd84sVHqgfj7y81HKuV5n26UejiX5j5nRlKh0j/QKPWQ9uv/bk5SCa/PRunZSb3xOa7NUQHvP79R6oH59FHmJSk77p/e2Cj14Fzztu+Zm6TpZfdmJ48spd7Y+PwPuxJPal74tjc2Sj1UH/iwj9hJxWvfdmKm0sha6o2NJ371G3btjNArfvycazIWRvZSP+j73/zhy15huvLsfP6od330zdmrIpOp/96vrjnx/OfDMH3/kE9ktIjMpg5IHaQOSB2QOiB1QOqA1AGpA1IHpA5SB6QOSB2QOiB1QOqA1AGpA1IHqQNSB6QOSB2QOiB1QOqA1AGpg9QBqQNSB6QOSB2QOiB1QOqA1EHqgNQBqQNSB6QOSB2QOiB1kDogdUDqgNQBqQNSB6QOSB2QOkgdkDogdUDqgNQBqQNSB6QOSB2kDkgdkDogdUDqgNQBqQNSB6QOUgekDkgdkDogdUDqgNQBqQNSB6kDUgekDkgdkDogdUDqgNQBqYPUAakDUgekDkgdkDogdUDqgNRB6oDUAakDUgekDkgdkDogdUDqIHVA6oDUAakDUgekDkgdkDogdZA6IHVA6oDUAakDUgekDkgdpO5PAFIHpA5IHZA6IHVA6oDUAamD1AGpA1IHpA5IHZA6IHVA6oDUQeqA1AGpA1IHpA5IHZA6IHVA6iB1QOqA1AGpA1IHpA5IHZA6IHWQOiB1QOqA1AGpA1IHpA5IHZA6SB2QOiB1QOqA1AGpA1IHpA5IHaQOSB2QOiB1QOqA1AGpA1IHpA5SB6QOSB2QOiB1QOqA1AGpA1IHqQNSB6QOSB2QOiB1QOqA1AGpg9QBqQNSB6QOSB2QOiB1QOogdUDqgNQBqQNSB6QOSB2QOiB1kDogdUDqgNQBqQNSB6QOSB2QOkgdkDoQu98BXCNavx2URd0AAAAASUVORK5CYII=">
                    <span>developers_india</span>
                </div>

                <div class='bottom'>
                    <h1>{{title}}</h1>
                    <img src='https://analyticsindiamag.com/wp-content/uploads/2024/07/Mohits-Banners-4-1300x731.jpg'>
                </div>
            </div>
            <div class='right'>
                <div class='card'>
                <span style='color: white;'>
                {{content}}
                </span>
                </div>
                <div class='post-stats'>
                </div>
            </div>
        </div>
    </main>
  </body>
</html>
`;
export const templateStyles = `
* {
  box-sizing: border-box;
}
  span {
  font-family: Nunito;
  }
  h1 {
    font-family: Montserrat;
  }
:root {
//   font-size: 16px;
}
body {
  padding: 2.5rem;
  padding-top: 1em;
  height: 90vh;
  background: #042f7d;
  {{#if bgUrl}}
  background-image: url({{bgUrl}});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  {{else}}
  background: linear-gradient(to right, #042f7d, #007eff);
//   color: #00ffae;
  {{/if}}
  background: #090809;
  color: white;
}
main {
  height: 100%;
  width: 100%;
}
.logo img {
    width: 100px;
    height: auto;
}
.logo span {
  font-size: 2rem;
  color: yellow;
  text-decoration: wavy;
  font-variant: unicase;
}
.title {
font-size: {{fontSize}};
  margin-top: 25px;
}
.left {
    width: calc(50% - 30px) ;
    height: 380px;
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
}
.right {
    width: 35%;
    height: 380px;
    margin-top: 15px;
}
    
.right .card {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: #884dfe;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 12px;
}

.left .top {
    width: 100%;
    height: 60px;
    display: flex;
    align-items:center;
}
.left .top img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.left .top span {
    margin-left: 10px;
}

    .left .bottom img {
        width: calc( 100% - 0px );
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
    }
        .right .card span {
            text-align:center;
            color: white;
        }
`;
