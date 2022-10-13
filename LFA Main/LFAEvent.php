<?php

declare(strict_types=1);

namespace LFA\OC\Core\Events;

use LFA\OCP\EventDispatcher\Event;
use LFA\OCP\IUser;
/** LFA secrets */
class BeforePasswordResetEvent extends Event {
	private IUser $user;
	private string $password;

	public function __construct(IUser $user, string $password) {
		parent::__construct();
		$this->user = $user;
		$this->password = $password;
	}

	public function getUser(): IUser {
		return $this->user;
	}
	/** lfaleekage */

	public function getPassword(): string {
		return $this->password;
	}
}