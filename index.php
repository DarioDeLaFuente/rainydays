<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Flexgrid.css</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-size: 10px;
    }

    body {
      color: #555;
      background-color: #fff;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 1.6rem;
      line-height: 1.6;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 2rem 0;
      padding: 0;
      color: #333;
      line-height: 1.1;
    }

    .Header,
    .Footer {
      text-align: center;
    }

    .Header {
      border-bottom: solid 1px #eee;
    }

    .Footer {
      border-top: solid 1px #eee;
    }

    .Container {
      padding: 2rem;
    }

    .Box {
      padding: 1rem;
      background-color: #eee;
    }
  </style>
  <link rel="stylesheet" href="../dist/flexgrid.css">
</head>
<body>

<header class="Header">
  <div class="Container">
    <h1>Flexgrid.css Demos</h1>
  </div>
</header><!-- /Header -->

<main class="Main">
  <section class="Section">
    <div class="Container">
      <h2>Flexgrid!</h2>
      <div class="Grid Grid--gutter-xl">
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-1"><div class="Box"></div></div>
        <div class="Grid-cell--xs-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-3"><div class="Box"></div></div>
        <div class="Grid-cell--xs-3"><div class="Box"></div></div>
        <div class="Grid-cell--xs-3"><div class="Box"></div></div>
        <div class="Grid-cell--xs-3"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-6"><div class="Box"></div></div>
        <div class="Grid-cell--xs-6"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12"><div class="Box"></div></div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Auto Sizing</h2>
      <div class="Grid Grid--gutter-xl">
        <div class="Grid-cell--auto"><div class="Box">..</div></div>
        <div class="Grid-cell--auto"><div class="Box">...</div></div>
        <div class="Grid-cell--auto"><div class="Box">.....</div></div>
        <div class="Grid-cell--auto"><div class="Box">........</div></div>
        <div class="Grid-cell--auto"><div class="Box">.............</div></div>
        <div class="Grid-cell--auto"><div class="Box">.....................</div></div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Fill Space</h2>
      <div class="Grid Grid--gutter-xl">
        <div class="Grid-cell--xs"><div class="Box"></div></div>
        <div class="Grid-cell--xs"><div class="Box"></div></div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Unordered List</h2>
      <ul class="Grid Grid--gutter-xl">
        <li class="Grid-cell--xs-12 Grid-cell--md-2"><div class="Box"></div></li>
        <li class="Grid-cell--xs-12 Grid-cell--md-8"><div class="Box"></div></li>
        <li class="Grid-cell--xs-12 Grid-cell--md-2"><div class="Box"></div></li>
      </ul>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>New Line, Adaptive Sizing</h2>
      <div class="Grid Grid--gutter-xl">
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"><div class="Box"></div></div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Multiple Adaptive Sizing</h2>
      <div class="Grid Grid--gutter-xl">
        <div class="Grid-cell--xs-12 Grid-cell--md-2 Grid-cell--xl-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-8 Grid-cell--xl-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-2 Grid-cell--xl-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-4"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-4"><div class="Box"></div></div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Offset Cells</h2>
      <div class="Grid Grid--gutter-xl">
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--md-offset-6">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-8">
          <div class="Box"></div>
        </div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Center Extra Cells</h2>
      <div class="Grid Grid--justifyCenter Grid--gutter-xl">
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2"><div class="Box"></div></div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Pack Extra Cells To End</h2>
      <div class="Grid Grid--justifyEnd Grid--gutter-xl">
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Distribute Extra Cells (space between)</h2>
      <div class="Grid Grid--spaceBetween Grid--gutter-xl">
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
      </div>
    </div>
  </section><!-- /Section -->

  <section class="Section">
    <div class="Container">
      <h2>Distribute Extra Cells (space around)</h2>
      <div class="Grid Grid--spaceAround Grid--gutter-xl">
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
        <div class="Grid-cell--xs-12 Grid-cell--md-6 Grid-cell--lg-4 Grid-cell--xl-2">
          <div class="Box"></div>
        </div>
      </div>
    </div>
  </section><!-- /Section -->
</main><!-- /Main -->

<footer class="Footer">
  <div class="Container">
    <small>&copy; 2016, axiomzen.co</small>
  </div>
</footer><!-- /Footer -->

</body>
</html>