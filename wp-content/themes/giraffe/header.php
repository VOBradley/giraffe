<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package giraffe
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="<?php echo bloginfo('template_url'); ?>" type="image/x-icon">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >
<div class="loader" style="width: 100vw; height: 100vh; position: fixed; background-color: white; z-index: 500; display: none;">
        <div id="loader-logo"></div>
        <p>Загружаем...</p>
    </div>
    <header>
	<a href="<?php echo get_home_url(); ?>">
		<img class="logo" src="
		<?php 
			$custom_logo__url = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' ); 
			echo $custom_logo__url[0]; 
		?>
		" alt="Логотип Giraffe Coffe">
	</a>
    </header>
<?php wp_body_open(); ?>