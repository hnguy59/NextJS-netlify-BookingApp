import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getPlayer } from "../../data/api";
import PlayerReceipt from "../../components/playerReceipt";

const Post = () => {
  const router = useRouter();
  const { player } = router.query;
  let playerList = getPlayer(player);

  return (
    <div>
      <PlayerReceipt data={playerList} />
    </div>
  );
};

export default Post;
