<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title(' | ', true, 'right'); ?></title>
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
<?php wp_head(); ?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
</head>
<body <?php body_class(); ?>>
  <div id="wrapper" class="hfeed">
    <header id="header" role="banner">
      <section id="branding">
        <div id="site-title">
          <h1>Wise Romeos</h1>
          <h2>Web Development</h2>
        </div>
      </section>
      <nav id="menu" role="navigation">
        <!-- <div id="search">
        <?php get_search_form(); ?>
        </div> -->
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
      </nav>
    </header>
    <div id="container">