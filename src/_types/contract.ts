type tx = {
  transactionHash: string
  blockHash: string
}

export interface MyContract {
  methods: {
    addCampaign(
      title: string,
      description: string,
      videoUrl: string,
      imageUrl: string,
    ): {
      send(): Promise<tx>
    }
    nextId(): {
      call(): Promise<number>
    }
  }
}
