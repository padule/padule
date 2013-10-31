Padule Git運用規約
=============

PaduleのGit運用規約です。
基本的な運用は「[A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)」[(日本語訳)](http://keijinsonyaban.blogspot.com/2010/10/successful-git-branching-model.html)に従います。

メインブランチ
-------------
originに常に存在するブランチ。

* master -- タグ付専用ブランチ。常にリリース安定版。
* develop -- 次期リリース用ブランチ。開発用メインブランチ。

サポートブランチ
-------------
必要に応じて切る作業用ブランチ。使い終わったら削除します。

### FeatureBranch `feat/*`
新機能開発用。

### FixBranch `fix/*`
通常バグFix用。

### HotFixBranch `hotfix/*`
緊急バグFix用。

### ReleaseBranch `release/*`
リリース準備用。


注意点
-------------
* commit -a オプションは禁止。
diffを確認しながらcommitするようにしてください。

* git rebaseはこまめに。
マージ、PullRequestの前に必ずgit rebaseするようにしてください。
conflictすると面倒なので、なるべくこまめにrebaseすることをオススメします。


便利コマンドのエイリアス
-------------
よく使うgitコマンドはエイリアスを貼っておくと便利です。

    PATH=$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
    alias ll='ls -l'
    alias gib='git branch'
    alias gic='git checkout'
    alias gist='git status'
    alias gim='git merge --no-ff'

参考記事
-------------
* [Gitのブランチで効率的に開発・運用・保守・管理する方法](http://dxd8.com/archives/218/)
* [見えないチカラ: A successful Git branching model を翻訳しました](http://keijinsonyaban.blogspot.com/2010/10/successful-git-branching-model.html)
