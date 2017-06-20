<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_baj');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2)a&Dt$0WQ3A37VZ^s0 MiO_cVs@#II}uU@6F`@*foJY=U8b|Sj]:%Q[$MpS:C.T');
define('SECURE_AUTH_KEY',  '%1Z70`dE Ss;81w3>!D+1Z%;SSdetPoj-{crz0_F.rHDH<{d%3*++|r&rrEQBsZb');
define('LOGGED_IN_KEY',    'bagzGIFpkI/)`_bff0~#M:LcjX*pDq73}RpVgnjBI8[V=Y|l-t3/y/&JZ.k+,|Lm');
define('NONCE_KEY',        'W)!e`5bm5#Huqq7{l_D/{B<%o?^o[[w3,YlxiE0Gyx6SIQkdTwhP<O35k+Kr66_/');
define('AUTH_SALT',        ')BDOe(`jX[_^[TY_z5yKDW2Ntth842:6FX<ig*RM;U9^tJg.AI$4PN><^cSBVIi)');
define('SECURE_AUTH_SALT', 'dP^+PT|Ow{^8_O^z-6*dE/H*2mKhqL[UEv>eq80snj{buo7rQ6IW[zaqa~X8u:vW');
define('LOGGED_IN_SALT',   'Eb^`5sj6HHT3_@FBSs_APG fiySR8[5.%L>>}WOU[ u%Mo$+y>,Ej5Pg;-x&d//H');
define('NONCE_SALT',       '~q<$pIMjH+;o$c8?E}V=ZXfJyjU/{AP,owJghM0_=b$f6^P[GmaAJyJItH9K05jm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
