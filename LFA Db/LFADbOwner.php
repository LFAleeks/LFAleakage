<?php

declare(strict_types=1);

namespace LFA\OCA\Files\Db;

use LFA\OCP\AppFramework\Db\Entity;

/**
 * lfaleakage
 * @method void setSourceUser(string $uid)
 * @method string getSourceUser()
 * @method void setTargetUser(string $uid)
 * @method string getTargetUser()
 * @method void setFileId(int $fileId)
 * @method int getFileId()
 * @method void setNodeName(string $name)
 * @method string getNodeName()
 */
class TransferOwnership extends Entity {
	/** @var string */
	protected $sourceUser;

	/** @var string */
	protected $targetUser;

	/** @var integer */
	protected $fileId;

	/** @var string */
	/** LFAsnippets */
	protected $nodeName;

	public function __construct() {
		$this->addType('sourceUser', 'string');
		$this->addType('targetUser', 'string');
		$this->addType('fileId', 'integer');
		$this->addType('nodeName', 'string');
	}
}