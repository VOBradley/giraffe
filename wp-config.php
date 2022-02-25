<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'giraffe' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';Qx)M{]@3V_tpooo9E_EoDVVfsIef}(wc*hvxt@U1Sh9cC AAL}U$w_(q )]`G2=' );
define( 'SECURE_AUTH_KEY',  '[,;w5-?%Hd}PDRxS~Du!DEK5aQJ{TcqBh/l+iE6j5(xNe9p[L5-?9k Y,[:qNH: ' );
define( 'LOGGED_IN_KEY',    'z[9 7:L`:25fjS*<INW)K_cp`5YzFj!&Knt QUhBdF@_H&I@.$*.Z4>fjMB&<Mj6' );
define( 'NONCE_KEY',        'KF21L:|S*p]aNDALaP:VFWjB{A5hl9=Id[.]*%HNj,[D[G2IJFWJE*]^HE7T?miO' );
define( 'AUTH_SALT',        '1oy+E@?(Q_|;^;kC>N[1Z!1(O,93ttH O4hL7~qk;=giOX ey5kL;J N@Tm:>P9`' );
define( 'SECURE_AUTH_SALT', 'lS];2+~:r_;%A/[qSd_Gz`3[#~S~t=d=.#)@9z3%0oe8~^Wow<xMFbw770;cf7#G' );
define( 'LOGGED_IN_SALT',   '.CTbI-c^m5F.y7I_C9u.jr@ENKCv|7he4,6:svGRTR8;j9^{[y`xveJ3kC}tom2z' );
define( 'NONCE_SALT',       'nok-S^%ja>+#Ou/@49e[+WG2cAaUow:vCX[4]S28Gy*:dQFS?>LmF?1kgFnsKL>g' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
