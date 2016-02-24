<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Patterns extends MX_Controller {

    function __construct() {
        parent::__construct();
    }

    public function index() {
        $data['module'] = 'patterns';
        $data['view_file'] = 'patternview';
        echo Modules::run('template/admin', $data);
    }

}
