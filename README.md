# Quickstart

## Infra to deploy to hosting + db

## Install

```bash
npm install @typespec/http-server-javascript
```

## TSP init

```
tsp init
```

## Server emitter

### Usage

1. Via the command line

```bash
tsp compile . --emit=@typespec/http-server-javascript
```

2. Via the config

```yaml
emit:
  - "@typespec/http-server-javascript"
```

## Client emitter

### Usage

1. Via the command line

```bash 
tsp compile . --emit=@typespec/http-client-javascript
``

2. Via the config

```yaml
emit:
  - "@typespec/http-client-javascript"
```

