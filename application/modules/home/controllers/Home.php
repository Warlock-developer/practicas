<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Home extends MX_Controller {
    
    public function index()
    {
        //$this->load->view('tpl_index');
        $data['module'] = 'home';
        $data['view_file'] = "tpl_hola";
        echo Modules::run('template/admin',$data);
    }

     public function hola(){ //Este será el bloque 
        $this->load->view('tpl_hola'); //vista parcial
    }
}
