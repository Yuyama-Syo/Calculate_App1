https://go-tech.blog/nodejs/nestjs/typeorm-mysql/

$ npx typeorm migration:generate -n CreateBlog
#migrate実行
$ npx typeorm migration:run

#migrateのロールバック
$ npx typeorm migration:revert
