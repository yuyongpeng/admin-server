
BUILD_DIR=dist
ProjectPKGName=admin-server
Prisma_DIR=./src/prisma

all: swagger build-dstamp-deploy

deploy: dstamp_DIR=/data/apps/dstamp/
deploy: git swagger build-dstamp
	@ mkdir -p $(dstamp_DIR)/logs
	@ chown	dstamp.dstamp $(dstamp_DIR)/logs
	@ chown dstamp.dstamp $(dstamp_DIR)/server/build/dstamp
	@ systemctl stop dstamp-dlv.service
	@ systemctl restart dstamp.service

prisma:
	@ npx prisma db pull --schema=./src/prisma-test/schema.prisma
	@ npx prisma generate

# prisma 将数据库的数据导出配置
pull:
	@ cp ./src/prisma/schema.prisma ./src/prisma/genAll.prisma
	@ npx prisma db pull --schema=./src/prisma/genAll.prisma
	# @ npx prisma db pull --schema=./src/prisma/schema.prisma --print > ./src/prisma/test.prisma

# 生成 prisma-client
gen:
	@ rm -rf ./prisma/genAll.prisma
	@ npx prisma generate --schema=./src/prisma/
	# @ cd src
	
git:
	@ git pull

pm2-test:
	@ git stash
	@ git pull
	@ pm2 delete admin-server 
	@ pm2 restart ecosystem.config.yml --env test

pm2-prod:
	@ git stash
	@ git pull
	@ pm2 delete admin-server
	@ pm2 restart ecosystem.config.yml --env production

clean:
	rm -f $(Prisma_DIR)/genAll.prisma

.PHONY: all build clean pull gen
