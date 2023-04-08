---
icon: edit
date: 2020-08-12 23:12:17
category:
  - 区块链
tag:
  - Hyperledger
  - fabric
  - golang
---

# Hyperledger fabric sdk go 国密改造

最近在做Hyperledger fabric国密改造，网上很多关于国密改造的，但是大多数都是对fabric进行改造，sdk改造的很少。

测试很多人改的，都没能测通，最后找到了[bolenzhang](https://github.com/bolenzhang)改的[go sdk国密](https://github.com/bolenzhang/fabric-go-sdk-gm) 和[zhangqc](https://github.com/gwanted)的[fabric国密](https://github.com/gwanted/fabric-gm) 才测通了，他们基于同济的国密算法[https://github.com/tjfoc/gmsm](https://github.com/tjfoc/gmsm)

其中sdk中有一点小问题，有个包引用但是没有找到包文件，于是注掉了
文件internal/github.com/hyperledger/fabric/core/ledger中一个引用包

```
"github.com/hyperledger/fabric-sdk-go/internal/github.com/hyperledger/fabric/core/ledger/util/couchdb"
```
改包没有找打，代码中也没有，索性就注掉了该包以及调用，大概52行左右的StateDBConfig结构体里
```
type StateDBConfig struct {
	// StateDatabase is the database to use for storing last known state.  The
	// two supported options are "goleveldb" and "CouchDB".
	StateDatabase string
	// CouchDB is the configuration for CouchDB.  It is used when StateDatabase
	// is set to "CouchDB".
	//CouchDB *couchdb.Config 
}
```

还有另一个包兼容问题，我用的beego，有个包 github.com/go-kit/kit ，fabric中用的版本是v0.8.0，而beego依赖包中使用的是v0.9.0，而这两个版本中 github.com/go-kit/kit/metrics/statsd 的SendLoop 方法v0.8.0版本是3个参数
```
(c <-chan time.Time, network, address string)
```
而v0.9.0及以后版本是四个参数
```
(ctx context.Context, c <-chan time.Time, network, address string)
```
怕更新包版本又影响别的地方，直接修改sdk源码，将包文件
internal/github.com/hyperledger/fabric/core/operations/system.go 大概227行左右,原方法为：
```
go s.statsd.SendLoop(s.sendTicker.C, network, address)
```
增加一个参数
```
go s.statsd.SendLoop(nil,s.sendTicker.C, network, address)
```

大功告成，该go sdk是基于v1.0.0-beta1版本改的，目前官方已经发布了v1.0.0-beta2，于是按着他这个改了一个基于v1.0.0-beta2的fabric sdk go国密版，fabric也参考gwanted的基于1.4.7改了。
