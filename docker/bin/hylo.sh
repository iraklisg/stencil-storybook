#!/bin/bash

function main() {
    local docker_compose="docker compose"

    # Start the services
    if [ "$1" == "up" ] || [ "$1" == "down" ]; then
        $docker_compose "$@"
    # Proxy commands on the node container...
    elif [ "$1" == "npm" ] || [ "$1" == "npx" ]; then
        shift 1
        $docker_compose run --rm \
            --user $(id -u):$(id -g) \
            node \
            npm "$@"
    else
        echo "What are you doing?"
    fi
}

main "$@"