<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * est_form()
 * carga los estilos basicos del formulario.
 */
if (!function_exists('_print_r')) {

    function _print_r($arreglo) {
        echo "<pre>";
        print_r($arreglo);
        echo "</pre>";
    }

}