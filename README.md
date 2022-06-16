# proxy-render

This is a tool to convert ss/ssr/vmess/trojan subscription links into config


## Install

Install from the command line:
```shell
npm install @tbxark/proxy-render@1.2.0
```
Install via package.json:
```json
"@tbxark/proxy-render": "1.2.0"
```


## Usage

You can refer to the [example](example) for more details.

### Deploy to cloudflare
```shell
cd example
yarn
cp wrangler.toml wrangler-release.toml # and edit wrangler-release.toml  
yarn run login
yarn run publish
```

### Serve on local
```shell
cd example
yarn
yarn run local
```
