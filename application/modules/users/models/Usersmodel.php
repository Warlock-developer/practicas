<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Usersmodel extends CI_Model {

	function get_userList(){
		 $query = $this->datatables->select('*',false)
		 			->from('core.ts_usuarios')
		 			->generate();
		 return $query;
	}

}