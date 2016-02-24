<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Template extends MX_Controller {

    function admin($data) {
        $this->load->view('template', $data);
    }

    function user() {
        //$this->load->view('admin');
    }

   

}
