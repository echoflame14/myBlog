update posts
	set posttext = $1, posttitle = $2, posttime = $3, postimgsrc = $4, postimgalt = $5
	where postId = $6;
